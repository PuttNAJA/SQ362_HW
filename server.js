const http = require('http');
const NReq = require('./lib/NReq');

const PORT = process.env.PORT || 9818;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/hi') {
        res.writeHead(200, 'Hi, this is your call in GET method.');
        res.end();
    } else if (req.method === 'POST' && req.url === '/hi') {
        res.writeHead(200, 'Hi, this is your call in POST method.');
        res.end();
    } else {
        res.writeHead(404, 'Not Found');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});