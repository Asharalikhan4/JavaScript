const express = require("express");
const app = express();

app.use("/about", (req, res) => {
    res.send("About Page.");
});

app.use("/", (req, res) => {
    res.send("Hello From the Server.");
});

// handling the error
app.use("/", (err, req, res, next) => {
    try {
        // write your logic here
    } catch (err) {
        res.status(500).send("Something went wrong.");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});