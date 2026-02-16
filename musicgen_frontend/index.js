let selectedMood = "";

function selectMood(mood) {
  selectedMood = mood;
  console.log("Mood selected:", mood);
}

async function generateMusic() {
  if (!selectedMood) {
    alert("Please select a mood first!");
    return;
  }

  console.log("Sending to backend:", selectedMood);

  const response = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: selectedMood })
  });

  if (!response.ok) {
    alert("Music generation failed");
    return;
  }

  const blob = await response.blob();
  const audioUrl = URL.createObjectURL(blob);

  const player = document.getElementById("player");
  player.src = audioUrl;
  player.load();
  player.play();
}
