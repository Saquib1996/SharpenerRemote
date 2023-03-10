"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Setup Babel with express js

// const express = require('express')

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Sonam Gupta Bewafa hai');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});