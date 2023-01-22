const express = require('express');
const app = express();
app.get('', (req, res) => {
    res.send(`<h1>Hello,this is Home Page</h1> <a href='/about'>Go to about Page</a> <br> <a href='/help'>Go to help Page</a>`)
});
app.get('/about', (req, res) => {
    res.send(`<input type="text" placeholder="Enter Username" value="${req.query.name}"/>   
    <button>Submit</button> <br>
    <a href='/'>Go to Home Page</a>
    `);
});
app.get('/help', (req, res) => {
    res.send([
        {
        name:'Saquib Hassan',
        Email:'saquib23101996@gmail.com'
    },  
])
});
app.get('/Welcome', (req, res) => {
    res.send('<h1>Hello,this is welcome Page</h1>')
});
app.listen(4000);