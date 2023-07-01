const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response) => {
    if(request.url === '/') {
        // response.end('<h1>This is the home Page</h1>')
        response.write('<h1>This is the home Page</h1>')
        response.end();
    } else if (request.url==='/data'){
        // fs.readFile('./data.json',"utf-8",(err,data)=>{
        //     if(err){
        //         response.write(err);
        //         response.end;
        //     } else{
        //         response.end(data);
        //     }
        // })

        const dataStream = fs.createReadStream('./data.json','utf-8')
        dataStream.pipe(response)
    } else if (request.url==='/adddata' && request.method==='POST'){
        // console.log(request.body);
        let str=""
        request.on('data',(chunk)=>{
            str+=chunk;
        })
        request.on('end',()=>{
            console.log(str);
        })
        response.end('Data has been added')
    }
     else if (request.url==='/todos'){
        fs.readFile('./todo_data.json',(err,data)=>{
            if(err){
                response.write(err);
                response.end();
            } else{
                response.end(data);
            }
        })
    }
    else{
        response.end(http.STATUS_CODES['404']);
    }
})

server.listen(4500,()=>{
    console.log('server is running at port no 4500')
});