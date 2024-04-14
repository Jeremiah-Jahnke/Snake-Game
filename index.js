// I use node.js along with some libraries because index.js is of type module which can only be ran if hosted via a server.
// So instead of opening python and typing python -m http.server, I can just run node index.js and open the browser to localhost:3000
// Plus this just helps me memorize the syntax and use of node.js and express.js

// Importing necessary modules
const express = require("express"); // Express.js for server management
const ejs = require("ejs"); // EJS for templating
const path = require("path"); // Node.js path module for handling and transforming file paths

// Creating an Express.js application
const app = express();

// Defining the path to the public and views directories
const publicPath = path.join(__dirname, "public"); // Static files
const viewsPath = path.join(__dirname, "views"); // EJS templates

// Setting up EJS as the view engine for Express.js
app.set("view engine", "ejs"); // Set the view engine to EJS
app.engine("html", ejs.renderFile); // Register the EJS engine for .html files
app.set("views", viewsPath); // Set the views directory

// Setting up the public directory for static files
app.use(express.static(publicPath));

// Route handler for the root path and render the index.html file
app.get("/", (req, res) => {
    res.render("index.html");
});

// Starting the server on port 3000 if successful log a message
app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});