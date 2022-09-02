/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasPosition = canvas.getBoundingClientRect();

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 800);

let x = undefined;
let y = undefined;

let explosions = [];


class Explosion {
  constructor(x, y) {
    this.spriteSheet = new Image();
    this.spriteSheet.src = "./resources/boom.png";
    this.explosion = new Audio();
    this.explosion.src = "./resources/explosion.wav";
    this.rows = 5;
    this.cols = 1;
    this.spriteWidth = this.spriteSheet.width / this.rows;
    this.spriteHeight = this.spriteSheet.height / this.cols;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.frame = 0;
    this.speed = 13;
    this.turn = 0;
    this.x = x;
    this.y = y;
    this.angle = Math.random() * 6.24;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(
      this.spriteSheet,
      this.spriteWidth * this.frame,
      0,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.width/2,
      0 - this.height/2,
      this.width,
      this.height
    );
    ctx.restore();
  }

  update() {
    this.turn++;
    if(this.frame) this.explosion.play;
    if (this.turn % this.speed === 0) {
      this.frame++;
    }
    if(this.frame > this.cols){
      explosions.splice(this, 1);
    }
    this.draw();
  }
}

window.addEventListener("click", (evt) => {
  x = evt.clientX - canvasPosition.left;
  y = evt.clientY - canvasPosition.top;
  explosions.push(new Explosion(x, y));
  console.log(explosions);

  // ctx.fillStyle = "white";
  // ctx.fillRect(x, y, 50, 50);
});


const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  explosions.forEach((explosion) => {
    explosion.update();
  })
}

animate();
