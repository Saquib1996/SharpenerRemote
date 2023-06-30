const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response) => {
    if(request.url === '/') {
        // response.end('<h1>This is the home Page</h1>')
        response.write('<h1>This is the home Page</h1>')
        response.end();
    } else if (request.url==='/data'){
        fs.readFile('./data.json',(err,data)=>{
            if(err){
                response.write(err);
                response.end;
            } else{
                response.end(data);
            }
        })
    } else if (request.url==='/blogs'){
        response.end('<h1> Blog Data </h1>')
    }else{
        response.end(http.STATUS_CODES['404']);
    }
})

server.listen(4500,()=>{
    console.log('server is running at port no')
});