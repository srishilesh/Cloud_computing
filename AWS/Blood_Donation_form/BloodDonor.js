var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
const formidable = require('formidable')
const fs = require('fs')
const AWS = require('aws-sdk')

var connection = mysql.createConnection({
  host: "database-2.c4etcoiqjcuq.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "databaseaws",
  database: "donor"
});

const s3 = new AWS.S3({
  accessKeyId: "ASIASV7IMNY6H63QZ45N",
  secretAccessKey: "jHGyNr4oSirXI4/lbLywPIPUV5SGHaD2xizRFbzI",
  /*if you are using educate account include this here*/
  sessionToken:"FQoGZXIvYXdzEPP//////////wEaDLYvJlHdXBhT6aIoRSL8BJYF4M6lhPAhaYlceR9v0HfUMl/TW57vuk5tI7YPbpzhRcaUroR7Wu9mbvnAz5CdK4QizK6pUjkUBxtFon8Pf7ZIJZHdhXXHvXYhPUWK/duc/TTfheTvveFMgN56ogiE8iretxeC4eyJpj8CW9UUPu7M4LE0wXdGPglwq8QiNMaXWR1ihj4UmY465+gTz2qGufn6zG2Klu/b4nAq8VrDHdAvmReCyh0kenYx8rAd8QQiMFkHRuvny7KCw17rYEfPMA1NPCiw4RAAhnY5cOA34AhQmi3zLbMvyO9ZBJqBJKw26wvjdAtgFYspDwSmAZEQcbwLvYT3splDRoJSBIw0RzojoyN7hyUxSHM1HF/u3NctXVCtbWkRXnHV5/PWqVJrsDOui2VyiAExTV64qX1WDHm1kc1yV/2cej359IHKyRndDwqbgYsTh3rBwDAzW2CtgjXY+VvC2re/RQXAoj/xe6U5FkWnYG4QY36g/m+9hQV8euMgF8hZZB5WMZndWsl6yBZSy6yLEc2KIf+l6W1wfvBBlsztfScXJ/D4szG0hq4OSTx9lBg+DT5I9/ewxAp9N6bsSP2mgojcAIO0b2I/aJxT0Xtb2P+kXhyD12yDL+aaEmcRATO1EXAd9TgCr5Ea0jGnmq8waUdu8JT7ywKg3SUSZAQVAK6qSAt7LTtJL4BVKZ00tY6M/0OBEp0KgnN+/LapUYDvm5gIUqlKxOqwRWmNFtoHStPi6PilOiPcuSsDNrfCDvFeSCCF27ZOnuHdT5hqrs2yUUcegqAlarUgV7KJ9Q0hpcwbBVuJygfNtdTc9cVle6dusolKKWN0H89Fg4xxWLE0Ri+D7l827ijZkebqBQ=="
  });

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("signup.html", { root: __dirname });
});

app.get("/registration", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("registration.html", { root: __dirname });
});
app.get("/search", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("search.html", { root: __dirname });
});
app.get("/update", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("update.html", { root: __dirname });
});
app.get("/upload", function(req, res) {
  //res.sendFile('__dirname','first.html');
  res.sendFile("upload.html", { root: __dirname });
});
app.get("/delete", function(req, res) {
  //res.sendFile('__dirname','first.html');
  console.log("Delete.html entered");
  res.sendFile("delete.html", { root: __dirname });
});
// app.get("/form2", function(req, res) {
//   //res.sendFile('__dirname','first.html');
//   res.sendFile("delete.html", { root: __dirname });
// });
app.listen(8081, function() {
  console.log("Node server is running..");
});

app.post("/login",function(req,res){
  var user = req.body.username;
  var pass = req.body.password;
  connection.connect(function(err){
     
      connection.query("SELECT * FROM donor.donor",function(err,results,fields){
          console.log("Connected "+user+" "+pass);
          //res.writeHead(200,{'Content-type':'text/html'});
          //if (err) throw err;
          var length = results.length;
          console.log(length);
          f = 0;
          for(i=0;i<length;i++)
          {
              if((results[i].name == user) && (results[i].password == pass))
              {
                console.log(results[i].name+" "+results[i].password);
                res.sendFile('front.html', {root: __dirname });
              
              }
              else
              res.send("Wrong Credentials");
            
          }
           
      });
      
  });
  });
  
  app.post('/register',function(req,res){
  res.sendFile('registration.html',{root:__dirname});
  });
  
app.post('/uploadfile', (req, res) => {
    new formidable.IncomingForm().parse(req) .on('fileBegin', (name, file) => {
        file.path = __dirname + '/uploads/' + file.name;
        res.write("Upload fine");
        fs.readFile(file.path, (err, data) => {
        if (err) throw err;
        const params = {
        Bucket: 'srishilesh', // pass your bucket name
        Key: file.name, // file will be saved as testBucket/
        Body: JSON.stringify(data, null, 2)
        };

        s3.upload(params, function(s3Err, data) {
            if (s3Err) throw s3Err
        console.log(`File uploaded successfully at ${data.Location}`)
        });
        });


        res.end();
    })
    
});
app.post("/donor", function(req, res) {
  var fullname = req.body.fullname;
  var password = req.body.password;
  var emailid = req.body.emailid;
  var cpass = req.body.cpass;
  var dob = req.body.dob;
  var gender = req.body.gender;
  var bloodGroup = req.body.bloodGroup;
  var weight = req.body.weight;
  var countBlood = req.body.countBlood;
  var rphone = req.body.rphone;
  var mobile = req.body.mobile;
  var address = req.body.address;
  var city = req.body.city;
  var eligibility = req.body.eligibility;
  var terms = req.body.terms;
  //console.log(n);
  res.send(
    "fullname :" +
      fullname +
      "and" +
      "emailid :" +
      emailid +
      " Submitted Successfully!"
  );

  connection.connect(function(err) {
    
    console.log('Connected to database.');
    var sql1 =
      "INSERT INTO donor.donor (name,password,emailid,DOB,gender,bg,weight,count,resph,mobile,addr,city) VALUES ('" +
      req.body.fullname +
      "','" +
      req.body.password +
      "','" +
      req.body.emailid+
      "','" +
      req.body.dob+
      "','" +
      req.body.gender+
      "','" +
      req.body.bloodGroup+
      "','" +
      req.body.weight+
      "','" +
      req.body.countBlood+
      "','" +
      req.body.rphone+
      "','" +
      req.body.mobile+
      "','" +
      req.body.address+
      "','" +
      req.body.city+
      "');";
    connection.query(sql1, function(err, result) {
      console.log(sql1);
      if (err) throw err;
      console.log("1 record inserted");
    });
    connection.query("SELECT * FROM donor.donor", function(err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});

app.post("/city", function(req, res) {
  var cityname= req.body.city;
  //console.log(n);

  connection.connect(function(err) {
   
    connection.query("SELECT * FROM donor where city='"+cityname+"'", function(err, result, fields) {
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<html> <head><center><h1>Donor Details</h1>");
        res.write("</center></head><body><center><br><br> Name : "+result[0].name+"<br>password : "+result[0].password+"<br>emailid : "+result[0].emailid+"<br>DOB : "+result[0].DOB+"<br>gender : "+result[0].gender+"<br>bg : "+result[0].bg+"<br>weight : "+result[0].weight+"<br>how often :"+result[0].count+"<br>residence phone :"+result[0].resph+"<br>phone : "+result[0].mobile+"<br>Address : "+result[0].addr+"<br>City : "+result[0].city);
        res.write("</center</body></html>");
        res.end();
      console.log(result[0].name);
    });
  });
});
  
  app.post("/mob", function(req, res) {
    var mobileno= req.body.mobil;
    console.log(mobileno);
    connection.connect(function(err) {
     
      connection.query("SELECT * FROM donor WHERE mobile='"+mobileno+"'", function(err, result, fields) {
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<html> <head><center><h1>Donor Details</h1>");
        res.write("</center></head><body><center><br><br> Name : "+result[0].name+"<br>password : "+result[0].password+"<br>emailid : "+result[0].emailid+"<br>DOB : "+result[0].DOB+"<br>gender : "+result[0].gender+"<br>bg : "+result[0].bg+"<br>weight : "+result[0].weight+"<br>how often :"+result[0].count+"<br>residence phone :"+result[0].resph+"<br>phone : "+result[0].mobile+"<br>Address : "+result[0].addr+"<br>City : "+result[0].city);
        res.write("</center</body></html>");
        res.end();
        
      });


    });
  });
  


    