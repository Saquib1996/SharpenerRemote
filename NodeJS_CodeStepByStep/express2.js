const express = require('express');
const app = express();
app.get('', (req, res) => {
    console.log('Data sent by browser =>>> ',req.query.name);
    res.send('Hello,this is Home Page '+req.query.name)
});
app.get('/about', (req, res) => {
    res.send('Hello,this is About Page')
});
app.get('/help', (req, res) => {
    res.send('Hello,this is Help Page')
});
app.get('/Welcome', (req, res) => {
    res.send('Hello,this is welcome Page')
});

app.listen(5000);