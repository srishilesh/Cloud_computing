var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "../public/." + q.pathname;
    fs.readFile(filename,function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{'Content-type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        return res.end('Launched');
    });
    
}).listen(8081);

console.log("React app hosted in 8081");

//server.listen(8081);

//console.log('Node.js web server is hosted at port 8080');