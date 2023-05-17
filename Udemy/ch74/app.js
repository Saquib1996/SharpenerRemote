const path = require('path')

const http = require('http');

const express = require('express');

// const rootDir = require('../util/path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.use('/add-size', (req, res, next) => {
    // console.log('In another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="Size"><button type="submit">Enter Size</button></form>');
});



// const server = http.createServer(app);
// server.listen(3000)
// Or

app.listen(3010);