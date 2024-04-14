/**
 * The Canvas class represents the game canvas in the snake game.
 */
export class Canvas {
    /**
     * Constructs a new Canvas instance.
     * @param {CanvasRenderingContext2D} context - The context from the canvas.
     * @param {HTMLCanvasElement} canvas - The HTML canvas element.
     */
    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;
        this.squareSize = 10;
    }

    /**
     * Draws the game grid on the canvas.
     */
    draw() {
        const cols = Math.floor(this.canvas.width / this.squareSize);
        const rows = Math.floor(this.canvas.height / this.squareSize);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                this.context.fillStyle = (x + y) % 2 === 0 ? "#181b29" : "#1f2233";
                this.context.fillRect(x * this.squareSize, y * this.squareSize, this.squareSize, this.squareSize);
            }
        }
    }

    /**
     * Clears the canvas.
     */
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Displays a game over message on the canvas.
     * @param {string} message - The game over message to display.
     */
    gameOver(message) {
        this.context.fillStyle = "red";
        this.context.font = "30px Arial";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("Game Over", this.canvas.width / 2, this.canvas.height / 2);
        this.context.font = "20px Arial";
        this.context.fillText(message, this.canvas.width / 2, this.canvas.height / 2 + 30);
    }

    /**
     * Displays a game won message on the canvas.
     */
    gameWon() {
        this.context.fillStyle = "green";
        this.context.font = "30px Arial";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("You Won!", this.canvas.width / 2, this.canvas.height / 2);
    }
}