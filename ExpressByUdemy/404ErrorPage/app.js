const express = require('express');

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));


app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000, () => {
    console.log('Server is running at Port 3000');
});
