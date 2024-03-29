"use strict";
/// <reference path='_references.ts' />
var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public/app'));
// app.get('/', function(req, res){
//   res.send('Hello World');
// });
app.listen(3000, function () {
    console.log('Node app is running on port', 3000);
});
exports.App = app;
