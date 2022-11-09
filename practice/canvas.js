let canvas = document.getElementById("game-canvas")
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");
canvas.width = 1400
canvas.height = 800

let squares = [];
// s.addPath(ctx.fillStyle = `hsla(${c},100%,50%,1)`)
function drawSquare(x,y,s,c) {
	let square = new Path2D();
	square.rect(x,y,s,s)
	squares.push(square);
}
drawSquare(0,0,100,100,0)

console.log(squares)

