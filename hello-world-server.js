var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html>');
  res.write('<head><title></title></head>');
  res.write('<body>');
  res.write('<h1>Hello!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
