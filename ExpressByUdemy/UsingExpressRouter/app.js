const express = require('express');

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));


app.use(adminRoutes);
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000, () => {
    console.log('Server is running at Port 3000');
});
