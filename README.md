# 🐍 Snake Game

This is a simple implementation of the classic Snake game using JavaScript.

## 🌟 Features

- The game includes a scoring system, with a current score and high score. 🏆
- The game ends if the snake collides with the wall or with itself, and a message is displayed indicating the reason for the game over. 🚫
- The game is won if the snake fills up the entire canvas. 🎉
- The snake cannot move in the opposite direction to its current direction. 🔄

## 🚀 Setup

1. Make sure to have Node.js installed. 🚀
2. Clone or download the repository. 💻
3. Make sure to have the project dependencies installed by running the following command `npm install express ejs` 📦
4. Navigate to the project directory. 📂
5. Open command prompt. 💻
6. Run the following command `node index.js` 🌐
7. And have fun playing the game! 🎮

## 🕹 Controls

- Use the arrow keys or 'w', 'a', 's', 'd' keys to control the snake. ⌨
- Click on the canvas to start the game. 🖱
- Sadly there is no pause button. 😢
- Refresh the page to restart the game. 🔄
- And the high score doesn't save. 😢

## 📚 Code Structure

- `public/javascript/index.js`: This is the main game file. It sets up the game and contains the game loop. 🎮
- `public/modules/snakeLogic.js`: This file contains the `Snake` class, which handles the snake's movement and collision checks. 🐍
- `public/modules/canvasLogic.js`: This file contains the `Canvas` class, which handles drawing on the canvas and displaying game over and game won messages. 🖼
- `public/modules/appleLogic.js`: This file contains the `Apple` class, which handles the apple's position. 🍎
- `public/modules/scoreLogic.js`: This file contains the `Score` class, which handles the game's scoring system. 🏆

Enjoy the game! 🎉

## 📝 License
[MIT](LICENSE)

## Credits
- Jeremiah J.
- Google snake