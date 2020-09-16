const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
<<<<<<< HEAD
  const msg = '<h1>Hello Node1234 5678!\n</h1>'
=======
  const msg = '<h1>Hello Node1234 56789 101190139-git push!\n</h1>'
>>>>>>> 71c53952d917ddfd8a06dba79a34fbfe1412f4b5
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
