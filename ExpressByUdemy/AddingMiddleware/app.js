const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('In the middleware');
    next();
})
app.use((req,res,next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello from Express!</h1>');
    next();
})

// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000,()=>{
    console.log('Server is running at Port 3000');
})
