var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("This is the start of the app")
});

app.listen(3000)