var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host: "database-2.c4etcoiqjcuq.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "databaseaws",
  database: "donor"
});

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8081,function(){
    console.log("Server is running");
})
app.get("/", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("signup.html", { root: __dirname });
});

app.post("/login",function(req,res){
var user = req.body.username;
var pass = req.body.password;
connection.connect(function(err){
   
    connection.query("SELECT * FROM donor.donor",function(err,results,fields){
        console.log("Uploaded");
        if (err) throw err;
        var length = results.length;
        console.log(length);
        f = 0;
        for(i=0;i<length;i++)
        {
            if((results[i].name === user) && (results[i].password === pass))
            {res.sendFile('front.html', {root: __dirname });
            break;}
            else
            res.end("User not found");
        }
         
    });
    
});
});

app.post('/register',function(req,res){
res.sendFile('registration.html',{root:__dirname});
});


