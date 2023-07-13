const express = require('express');

const path = require('path');

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

const contactRoutes = require('./routes/contact.js');

const successRoutes = require('./routes/success.js')

const errorController = require('./controller/error.js')

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(successRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);
// server.listen(3000)

/***************************------------------OR-------------------*****************************/

app.listen(3000, () => {
    console.log('Server is running at Port 3000');
});
