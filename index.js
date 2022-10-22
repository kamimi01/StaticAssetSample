const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("docs"));

app.get("/apple-app-site-association", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./apple-app-site-association", "utf-8"));
    res.header("Content-Type", "application/json");
    res.json(data);
});

app.listen(3000);