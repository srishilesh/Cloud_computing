var express = require('express')
var http = require('http')
var app = express()
var url = require('url')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/form',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var title = req.body.title;
    var fund = req.body.fund;
    var url = req.body.url;
    var call = req.body.call;
    var co = req.body.CO;
    var amt = req.body.amt;
    var rev = req.body.rev;
    var sub = req.body.sub;
    var comm = req.body.comm;
    var no = req.body.no;
    //var q = url.parse(req.url,true).query;
    var data = name+"\n"+email+"\n"+title+"\n"+fund+"\n"+call+"\n"+url+"\n"+co+"\n"+amt+"\n"+rev+"\n"+sub+"\n"+comm+"\n"+no+"\n";
    fs.appendFile('details.txt',req.body,function(err,file)
    {
        if(err) 
        {
        res.writeHead(404,{'Content-type':'text/html'});
         res.end('404 Not Found');
        }
        res.writeHead(200,{'Content-type':'text/html'});
        //res.write(q.name+"\n"+q.email+"\n"+q.title+"\n"+q.fund+"\n"+q.call+"\n"+q.co+"\n"+q.amt+"\n"+q.rev+"\n"+q.sub+"\n"+q.comm+"\n"+q.no);
        res.write(file);
        console.log('Saved');
        
    });
    res.end("Details submitted");
}).listen(8081);

console.log("Started host on 8081");
