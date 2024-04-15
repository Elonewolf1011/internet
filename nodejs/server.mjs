import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    console.log('Received request....', req.url, req.method);

    if (req.url == '/') {
        if (req.method == 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'Text/plain');
            res.setHeader('Access-control-Allow-Orign', "*");

            res.end("Harshith");
        }
        if (req.method == 'OPTION') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
            res.setHeader('Access-Control-Allow-Methods', "POSt, GET, OPTION");
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end('OK');
        }
        if (req.method == 'POST') {
            console.log('post method...')
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Access-Control-Allow-Origin', "*");

            res.end(JSON.stringify({surname: "S"}));
        }
    }
}); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://$(hostname):$(port)/`);
})