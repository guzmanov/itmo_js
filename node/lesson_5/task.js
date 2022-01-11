const fs = require('fs');
const http = require('http');

http.createServer((req, res)=> {
    fs.readFile('index.html', 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
            res.statusCode = 500;
            return res.end();
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    })
}).listen(8001);