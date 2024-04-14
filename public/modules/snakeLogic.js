/**
 * The Snake class represents a snake in the snake game.
 */
export class Snake {
    /**
     * Constructs a new Snake instance.
     */
    constructor() {
        this.segments = [
            { x: 15, y: 15 },
        ];
        this.squareSize = 10;
    }

    /**
     * Draws the snake on the canvas.
     * @param {CanvasRenderingContext2D} context - The context from the canvas.
     */
    draw(context) {
        this.segments.forEach((segment) => {
            context.fillStyle = "#0f0";
            context.fillRect(segment.x * this.squareSize, segment.y * this.squareSize, this.squareSize, this.squareSize);
        });
    }

    /**
     * Moves the snake in the specified direction.
     * @param {string} direction - The direction to move the snake in ("up", "down", "left", or "right").
     */
    move(direction) {
        const head = { ...this.segments[0] };
        switch (direction) {
            case "up":
                head.y -= 1;
                break;
            case "down":
                head.y += 1;
                break;
            case "left":
                head.x -= 1;
                break;
            case "right":
                head.x += 1;
                break;
        }
        this.segments.unshift(head);
        this.segments.pop();
    }

    /**
     * Increases the size of the snake by adding a new segment at the end.
     */
    grow() {
        const tail = { ...this.segments[this.segments.length - 1] };
        this.segments.push(tail);
    }

    /**
     * Checks if the snake has collided with the wall or itself.
     * @param {HTMLCanvasElement} canvas - The game canvas.
     * @returns {string|false} Returns a string describing the type of collision if a collision occurred, or false if no collision occurred.
     */
    checkCollision(canvas) {
        const head = this.segments[0];

        // Check if the snake has gone out of the canvas
        if (head.x < 0 || head.y < 0 || head.x * this.squareSize >= canvas.width || head.y * this.squareSize >= canvas.height) {
            return "Collision with wall";
        }

        // Check if the snake has collided with itself
        for (let i = 2; i < this.segments.length; i++) {
            if (this.segments[i].x === head.x && this.segments[i].y === head.y) {
                return "Collision with self";
            }
        }

        return false;
    }

    /**
     * Checks if the snake has filled the entire canvas (i.e., the player has won the game).
     * @param {HTMLCanvasElement} canvas - The game canvas.
     * @returns {boolean} Returns true if the player has won the game, or false otherwise.
     */
    checkWin(canvas) {
        const totalSquares = (canvas.width / this.squareSize) * (canvas.height / this.squareSize);
        return this.segments.length === totalSquares;
    }
}