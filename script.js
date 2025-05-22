const playBtn = document.getElementById("playBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    playBtn.textContent = "⏸️ Pausar música";
  } else {
    bgMusic.pause();
    playBtn.textContent = "🎵 Reproducir música";
  }
  isPlaying = !isPlaying;
});
