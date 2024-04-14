// Importing necessary classes
import { Snake } from "../modules/snakeLogic.js"
import { Canvas } from "../modules/canvasLogic.js"
import { Apple } from "../modules/appleLogic.js"
import { Score } from "../modules/scoreLogic.js"

// Getting necessary elements from the DOM
const canvasElement = document.getElementById("gameCanvas");
const context = canvasElement.getContext("2d");
const currentScoreElement = document.getElementById("current");
const highScoreElement = document.getElementById("all-time");

// Creating instances of the classes
const snake = new Snake();
const score = new Score();
const canvas = new Canvas(context, canvasElement);
let apple = new Apple(context, snake.squareSize, canvasElement.width, canvasElement.height);

// Initial drawing of the canvas, snake and apple
canvas.draw();
snake.draw(context);
apple.draw()

// Variables to hold the last direction of the snake and the game state
let lastDirection = 'right';
let gameStarted = false;

// Event listener to start the game on canvas click
canvasElement.addEventListener('click', () => {
    gameStarted = true;
});

// Event listener to change the direction of the snake on key press
window.addEventListener('keydown', (event) => {
    let newDirection;
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            newDirection = 'up';
            break;
        case 'a':
        case 'ArrowLeft':
            newDirection = 'left';
            break;
        case 's':
        case 'ArrowDown':
            newDirection = 'down';
            break;
        case 'd':
        case 'ArrowRight':
            newDirection = 'right';
            break;
    }

    // Function to check if the new direction is opposite to the last direction
    const isOpposite = (dir1, dir2) => {
        return (dir1 === 'up' && dir2 === 'down') || (dir1 === 'down' && dir2 === 'up') || (dir1 === 'left' && dir2 === 'right') || (dir1 === 'right' && dir2 === 'left');
    };

    // If the new direction is not opposite to the last direction, update the last direction
    if (!isOpposite(lastDirection, newDirection)) {
        lastDirection = newDirection;
    }
});

// The main game loop
function gameLoop() {
    // If the game has not started, request the next animation frame and return
    if (!gameStarted) {
        requestAnimationFrame(gameLoop);
        return;
    }

    // Draw the canvas, snake and apple
    canvas.draw();
    snake.draw(context);
    apple.draw();

    // If the snake has eaten the apple, grow the snake, create a new apple and update the score
    if (snake.segments[0].x === apple.x && snake.segments[0].y === apple.y) {
        snake.grow();
        apple = new Apple(context, snake.squareSize, canvasElement.width, canvasElement.height);
        score.increaseScore();
        currentScoreElement.textContent = `Score: ${score.getCurrentScore()}`;
        highScoreElement.textContent = `All time score: ${score.getHighScore()}`;
    }

    // Check for collision and end the game if a collision occurred
    const collision = snake.checkCollision(canvasElement);
    if (collision) {
        canvas.gameOver(collision);
        score.resetScore();
        return;
    }

    // Check if the player has won the game and end the game if they have
    if (snake.checkWin(canvasElement)) {
        canvas.gameWon();
        score.resetScore();
        return;
    }

    // Request the next animation frame
    requestAnimationFrame(gameLoop);
}

// Interval to move the snake every 150ms
setInterval(() => {
    if (!gameStarted) {
        return;
    }

    snake.move(lastDirection);
}, 150);

// Start the game loop
gameLoop();