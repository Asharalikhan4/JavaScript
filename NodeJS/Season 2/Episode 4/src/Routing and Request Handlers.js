const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Ashar", lastName: "Ali Khan" });
});

app.post("/user", (req, res) => {
    console.log("User created successfully");
    res.send("User created successfully");
});

// Readig Query Parameters
// URL -> http://127.0.0.1:3000/reading?userId=100
app.get("/reading", (req, res) => {
    console.log(req.query)
    res.send(req.query);
});

// Handling dynamic routes
// URL -> http://127.0.0.1:3000/reading/100
app.get("/reading/:id", (req, res) => {
    console.log(req.query)
    res.send(req.query);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});