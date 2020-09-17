const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
<<<<<<< HEAD
  const msg = '<h1>Hello Node1234 5678910 -git push !\n</h1>'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
