var http = require('http');
var fs = require('fs');
var path = require('path')
var filePath = path.join(__dirname,'/../reactapp/public/index.html')

const PORT = 8080;
//var server = 
    fs.readFile(filePath,{encoding:'utf-8'},function(err,data){

        http.createServer(function(req,res){
        
        {
        //console.log('Received data: '+ data);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end("Hello");
        }
        
    }).listen(PORT);

});
//server.listen(8080);
console.log(filePath);
console.log("File server hosted in 8080");