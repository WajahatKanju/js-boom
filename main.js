/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasPosition = canvas.getBoundingClientRect();

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 800);

let x = undefined;
let y = undefined;




window.addEventListener("click", (evt) => {
  x = evt.clientX - canvasPosition.left;
  y = evt.clientY - canvasPosition.top;
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, 50, 50);
});

// const animate = () => {
//   requestAnimationFrame(animate);

// }

// animate();
