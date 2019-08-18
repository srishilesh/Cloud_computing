var express    = require("express");
var mysql      = require('mysql');
var bodyParser = require("body-parser");

var connection = mysql.createConnection({
  host     : 'database-1.c4etcoiqjcuq.us-east-1.rds.amazonaws.com',
 port      :  '3306',
  user     : 'admin',
  password : 'cloudcomputing',
  database : 'MyDB'

});
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/myaction', function (req, res) {
//   //res.sendFile('__dirname','first.html');
//   res.sendFile('first.js', { root: __dirname });
// });
var server = app.listen(3000, function () {
  console.log('Node server is running..');
});

app.post('/myaction', function (req, res) {
  var name = req.body.user; 
  var email= req.body.email;
  var pass = req.body.pass;
  var cpass = req.body.cpass;
  var dob = req.body.dob;
  var blood = req.body.blood;
  var when = req.body.when;
  var gender = req.body.gender;
  var weight = req.body.weight;
  var residence = req.body.residence;
  var mobile = req.body.mobile;
  var address = req.body.address;
  var city = req.body.city;

  console.log(n);
  res.send(' Submitted Successfully!');

  connection.connect(function(err) {
    if (err) throw err;
   // console.log(n);
   //var sql = "INSERT INTO student (name, rollno) VALUES ('name3', '003')";
   var sql = "INSERT INTO donor (name, email,pass,cpass,dob,blood,when,gender,weight,residence,mobile,address,city) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.pass+"','"+req.body.cpass+"','"+req.body.dob+"','"+req.body.blood+"','"+req.body.when+"','"+req.body.gender+"','"+req.body.weight+"','"+req.body.residence+"','"+req.body.address+"','"+req.body.city+"','"+req.body.mobile+"')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  
  
  connection.query("SELECT * FROM donor", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

});
});
