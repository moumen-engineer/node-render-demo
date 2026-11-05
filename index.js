const express = require("express");

const app = express();       // create the express app , we use it to configure the server and define routes

const PORT = process.env.PORT || 3000;

// Define the home page route
app.get("/", (req, res) => {
    res.send("Hello from Render!");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});