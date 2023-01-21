const http = require('http');
const { default: test } = require('node:test');

function dataControl(req, res) {
    res.write('<h1> Hello this is MdAbuSaquibHassan </h1>')
    res.end();
}

http.createServer(dataControl).listen(4500);