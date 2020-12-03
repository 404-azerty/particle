const canvas = document.querySelector(`canvas`);
const ctx = canvas.getContext(`2d`);
let particles;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function init() {
  particles = [];
  for (let index = 0; index < 100; index++) {
    let size = (Math.random() + 0.01) * 20;
    let positionX = Math.random() * (window.innerWidth - size * 2);
    let positionY = Math.random() * (window.innerHeight - size * 2);
    let directionX = Math.random() * 4 - 2;
    let directionY = Math.random() * 4 - 2;
    let color = `white`;
    particles.push(new Particle(positionX, positionY, directionX, directionY, size, color));
  }
}
init();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let index = 0; index < particles.length; index++) {
    const particle = particles[index];
    particle.move();
  }
}
animate();

function resize() {
  init();
  animate();
}

window.addEventListener(`resize`, () => {
  let changeCanvasSize = setTimeout(resize, 100);
  clearTimeout(changeCanvasSize);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
});
