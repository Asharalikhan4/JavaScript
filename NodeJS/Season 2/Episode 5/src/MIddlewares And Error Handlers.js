const express = require("express");
const app = express();

const { adminAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", (req, res) => {
    res.send("User route.");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("Admin route.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});