const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('hi from server');
        res.end();
    }
});

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('server is listening 3000')
});