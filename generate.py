import sys
from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write
import os

prompt = sys.argv[1]

model = MusicGen.get_pretrained("facebook/musicgen-small")
model.set_generation_params(duration=15)

audio = model.generate([prompt])

output_path = os.path.join(os.path.dirname(__file__), "output")

audio_write(
    output_path,
    audio[0].cpu(),
    model.sample_rate,
    strategy="loudness"
