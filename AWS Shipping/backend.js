var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
const formidable = require('formidable')
const fs = require('fs')
const AWS = require('aws-sdk');
var zipcodes = require('zipcodes')


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const s3 = new AWS.S3({
  accessKeyId: "",
  secretAccessKey: "",
  /*if you are using educate account include this here*/
  sessionToken:""
  });

app.post('/form',function(req,res){
    //res.writeHead(200,{'Content-type':'text/html'});
    var name = req.body.name;
    var zip = req.body.zip;
    var phone = req.body.phone;
    var email = req.body.email;
    var data = "\nName :" +name +
    "\nZip :" +zip +"\nPhone : "+phone+"\nEmail: "+email+"\nSubmitted Successfully!";
    res.write(data);
    fs.appendFile('output.txt',data,(err) =>{ //Writing it into a file
        if(err) throw err;
    })
    const uploadFile = () =>{//Uploading the file into S3 Bucket
        fs.readFile('output.txt',(err,data)=>{
          if(err) throw err;
        const params = {
          Bucket: 'srishilesh',
          Key: 'output.txt',
          Body: data
        };
        s3.upload(params, function(s3Err, data) {
            if (s3Err) throw s3Err
        console.log(`File uploaded successfully at ${data.Location}`)
        });
      });
      }

        uploadFile();
          res.end();
    

}).listen(3001);


console.log("Started host on 3001");
