const { 
    createServer
 } = require('node:http');

const host_name = '127.0.0.0';
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, host_name, () => {
  console.log('Running at http://${host_name}:${port}/');
});