const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (Math.random() < 0.5) {
      throw new Error('Random error occurred!');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});