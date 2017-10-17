var path = require("path");
var express = require("express");

var app = express();

var clientPath = path.join(__dirname, "../client");

app.use(express.static(clientPath));
app.listen(process.env.PORT || 3000);
