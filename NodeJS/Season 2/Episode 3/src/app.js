const express = require("express");
const app = express();

app.use("/about", (req, res) => {
    res.send("About Page.");
});

app.use("/", (req, res) => {
    res.send("Hello From the Server.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});