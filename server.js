const express = require("express");
const cors = require("cors");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("Backend working");
});

// AI music generation route
app.post("/generate", (req, res) => {
  const prompt = req.body.prompt;

  const scriptPath = path.join(__dirname, "generate.py");
  const audioPath = path.join(__dirname, "output.wav");

  exec(`python "${scriptPath}" "${prompt}"`, (error) => {
    if (error) {
      console.error(error);
      return res.status(500).send("AI generation failed");
    }

    res.setHeader("Content-Type", "audio/wav");
    res.sendFile(audioPath);
  });
});

app.get("/", (req, res) => {
  res.send("Backend is Live on Render 🚀");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
}); 

const express = require("express");
const cors = require("cors");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("Backend working");
});

// AI music generation route
app.post("/generate", (req, res) => {
  const prompt = req.body.prompt;

  const scriptPath = path.join(__dirname, "generate.py");
  const audioPath = path.join(__dirname, "output.wav");

  exec(`python "${scriptPath}" "${prompt}"`, (error) => {
    if (error) {
      console.error(error);
      return res.status(500).send("AI generation failed");
    }

    res.setHeader("Content-Type", "audio/wav");
    res.sendFile(audioPath);
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

