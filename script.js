let currentAudio = document.getElementById("song1");

function playMusic() {
  if (currentAudio.paused) {
    currentAudio.play();
  }
}

function toggleMusic() {
  if (currentAudio.paused) {
    currentAudio.play();
  } else {
    currentAudio.pause();
  }
}

// ❤️ Animación de corazones cayendo
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 15 + Math.random() * 10,
    speed: 0.5 + Math.random(),
    opacity: 0.5 + Math.random() * 0.5,
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.scale(size / 20, size / 20);
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
  ctx.bezierCurveTo(-5, 3, 0, 5, 0, 7);
  ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
  ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 105, 180, ${opacity})`;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    heart.y += heart.speed;
    if (heart.y > canvas.height) {
      heart.y = -10;
      heart.x = Math.random() * canvas.width;
    }
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
  });
  requestAnimationFrame(animate);
}
animate();
