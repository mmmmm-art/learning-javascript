//@ts-check
/** @type {HTMLCanvasElement} */ 
//@ts-ignore
let canvas = document.getElementById("game-canvas")
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800


let colors = ["Red", "green", "blue", "purple", "violet", "orange", "magenta", "cyan", "gold", "silver"];

class ClickBox {
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} s
	 * @param {colors} colors
	 */
	constructor(x,y,s, colors) {
		this.x = x;
		this.y = y;
		this.size = s;
		this.isClicked = false;
		this.refreshRate = 1000;
		this.lastRefresh = 0;
		this.colors = colors;
		this.color = "red";
		this.setColor();
	}

	setColor() {
		let colorIndex = Math.floor(Math.random() * this.colors.length);
		this.color = colors[colorIndex];
	}

	update(elapsedTime) {
		this.lastRefresh += elapsedTime;
		if(this.lastRefresh <= refreshRate) {
			return
		}
	}

	render() {

	}
}

let squares = [];
let gridSize = 10;
let squareSize = canvas.width/gridSize;



let currentTime = 0;
const refreshRate = 1000;
let lastRefresh = 0;

/**
 * @param {number} timestamp
 */
function Draw(timestamp) {
	let elapsedTime = timestamp - currentTime;
	currentTime = timestamp;
	lastRefresh += elapsedTime
	if(lastRefresh >= refreshRate){
		lastRefresh = 0
		for(let row = 0; row <= gridSize; row ++) {
			for(let col = 0; col <= gridSize; col ++) {
				let colorIndex = Math.floor(Math.random() * colors.length);
				let color = colors[colorIndex];
				ctx.fillStyle = color
				ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize)
			}
		}
	}
	requestAnimationFrame(Draw)
}
requestAnimationFrame(Draw)






