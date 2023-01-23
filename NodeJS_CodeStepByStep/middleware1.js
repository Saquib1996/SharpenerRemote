const express = require('express');
const reqFilter = require('./middleware');
const route = express.Router();
const app = express();
route.use(reqFilter);
// app.use(reqFilter);
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1>')
});
app.get('/users', (req, res) => {
    res.send('<h1> Welcome to Users Page </h1>')
});
route.get('/About', (req, res) => {
    res.send('<h1> Welcome to About Page </h1>')
});
route.get('/Contact', (req, res) => {
    res.send('<h1> Welcome to Contact Page </h1>')
});
app.use('/', route);
app.listen(5000);