/**
 * The Score class represents the scoring system in the snake game.
 */
export class Score {
    /**
     * Constructs a new Score instance.
     */
    constructor() {
        this.currentScore = 0;
        this.highScore = 0;
    }

    /**
     * Increases the current score by 1 and updates the high score if necessary.
     */
    increaseScore() {
        this.currentScore += 1;
        if (this.currentScore > this.highScore) {
            this.highScore = this.currentScore;
        }
    }

    /**
     * Resets the current score to 0.
     */
    resetScore() {
        this.currentScore = 0;
    }

    /**
     * Returns the current score.
     * @returns {number} The current score.
     */
    getCurrentScore() {
        return this.currentScore;
    }

    /**
     * Returns the high score.
     * @returns {number} The high score.
     */
    getHighScore() {
        return this.highScore;
    }
}