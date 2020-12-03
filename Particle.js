class Particle {
  constructor(positionX, positionY, directionX, directionY, size, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.size, 0, Math.PI * 2, false); // création d'un cercle
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move() {
    if (this.positionX + this.size > canvas.width || this.positionX - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.positionY + this.size > canvas.height || this.positionY - this.size < 0) {
      this.directionY = -this.directionY;
    }
    this.positionX += this.directionX;
    this.positionY += this.directionY;
    this.draw();
  }
}
