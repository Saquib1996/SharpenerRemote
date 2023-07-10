const http = require('http');

const express = require('express');

const app = express();

app.use('/',(req,res,next) => {
    console.log('In another the middleware');
    res.send('<h1>This is the HOME PAGE</h1>')
    next();
})

app.use('/add-product',(req,res,next) => {
    console.log('In the middleware');
    res.send('<h1>This is the ADD PRODUCT page</h1>');
})


// app.use('/',(req,res,next) => {
//     console.log('In another the middleware');
//     res.send('<h1>This is the HOME PAGE</h1>')
//     next();
// })


// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000,()=>{
    console.log('Server is running at Port 3000');
})
