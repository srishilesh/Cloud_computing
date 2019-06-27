var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Welcome Node.JS'+'<br/>');
    res.end('Hello World!');
});

server.listen(80);

console.log('Node.js web server is hosted at port 8080')