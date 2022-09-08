const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile('./index.html', null, (err, data) => {
            // 서버에서 어떤파일을 보내는지 알려줘야함
            res.writeHead(200, {
               'Content-Type': 'text/html' 
            })
            res.write(data);
            res.end(); // res 끝났을떄
        })
    }
});

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('server is listening 3000')
});