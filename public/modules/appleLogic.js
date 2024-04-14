/**
 * The Apple class represents an apple in the snake game.
 */
export class Apple {
    /**
     * Constructs a new Apple instance.
     * @param {CanvasRenderingContext2D} context - The context from the canvas.
     * @param {number} squareSize - The size of a square on the canvas.
     * @param {number} canvasWidth - The width of the canvas.
     * @param {number} canvasHeight - The height of the canvas.
     */
    constructor(context, squareSize, canvasWidth, canvasHeight) {
        this.context = context;
        this.squareSize = squareSize;
        // Randomly position the apple on the canvas.
        this.x = Math.floor(Math.random() * (canvasWidth / squareSize));
        this.y = Math.floor(Math.random() * (canvasHeight / squareSize));
    }

    /**
     * Draws the apple on the canvas.
     */
    draw() {
        this.context.fillStyle = "red";
        this.context.fillRect(this.x * this.squareSize, this.y * this.squareSize, this.squareSize, this.squareSize);
    }
}