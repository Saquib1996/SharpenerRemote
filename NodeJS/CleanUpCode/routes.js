const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const body = [];
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });
    } else if (url === '/message' && method === 'POST') {
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', function () {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]; //['message','My name is Saquib']
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('<html>');
        res.end();

    }
}

module.exports = requestHandler;

// Below are the another ways of handling the export

// module.exports={
//     handler:requestHandler
// }

// or

// module.exports.handler = requestHandler

// or

// exports.handler = requestHandler
