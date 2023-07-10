const express = require('express');

const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded())


app.use('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');


});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});


app.use('/', (req, res, next) => {
    console.log('In another the middleware');
    res.send('<h1>This is the HOME PAGE</h1>')
    next();
});


// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000, () => {
    console.log('Server is running at Port 3000');
});
