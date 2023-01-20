const http = require('http');
const server = http.createServer((req,res) => {
    console.log(req);
    console.log('Saquib Hassan');
})

server.listen(4000);