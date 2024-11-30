const express = require("express");
const app = express();
require("./config/DatabaseConnection");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});