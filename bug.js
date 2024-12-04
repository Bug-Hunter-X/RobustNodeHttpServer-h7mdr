const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Simulate an error that may occur randomly
    if (Math.random() < 0.5) {
      throw new Error('Random error occurred!');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    //Improper response handling
    res.end(); //Doesn't specify the error to the client
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});