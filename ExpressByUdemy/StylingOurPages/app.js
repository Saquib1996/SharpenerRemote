const express = require('express');

const path = require('path');

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000, () => {
    console.log('Server is running at Port 3000');
});
