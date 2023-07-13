
const rootDir = require('../util/path');

const path = require('path');



exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}
exports.postAddProducts=(req, res, next) => {
    console.log(req.body);
    res.redirect('/')
}
exports.getProducts=(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
 }

 exports.contact=(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contact.html'))
};

exports.success=(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'))
}