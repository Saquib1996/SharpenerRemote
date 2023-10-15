const routeResponseMap = {
    "/info": "<h1> Info Page </h1>",
    "/contact": "<h1> Contact Us </h1>",
    "/about": "<h1> Learn more about us </h1>",
    "/hello": "<h1>Say Hello by emailing us <a style=text-decoration:none href=https://mail.google.com/mail/u/0/#inbox?compose=new target=_blank>here</a></h1>",
    "/error": "<h1> Sorry the page you are looking for is not here </h1>"
};

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (routeResponseMap[req.url]) {
        setTimeout(() => {
            res.end(routeResponseMap[req.url])
        }, 5000);
    } else {
        res.end("<h1> Welcome ! </h1>");
    }
});

app.listen(port);

console.log(`The server has started and is listening on port number : ${port}`);