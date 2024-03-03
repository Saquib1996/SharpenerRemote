"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var expressHbs = require('express-handlebars');

var users = [];
app.engine('handlebars', expressHbs.engine({
  defaultLayout: 'main-layout',
  extnam: 'handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', 'views');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get('/', function (req, res, next) {
  res.render('index', {
    pageTitle: 'Add User'
  });
});
app.get('/users', function (req, res, next) {
  res.render('users', {
    pageTitle: 'User',
    users: users
  });
});
app.post('/add-user', function (req, res, next) {
  users.push({
    name: req.body.username
  });
  res.redirect('/users');
});
app.listen(3000);