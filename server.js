'use strict'

var express = require('express');
var subdomain = require('express-subdomain');
var app = express();

app.use(subdomain('css', express.static(__dirname + "/public")));
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.listen(8081, function() {
	console.log("New connection!");
});
