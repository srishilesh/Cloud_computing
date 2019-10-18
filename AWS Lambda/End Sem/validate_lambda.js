var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var querystring = require("querystring")
// const fs = require('fs')
const AWS = require('aws-sdk');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var connection = mysql.createConnection({
    host: "database-1.c4etcoiqjcuq.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "awsshilesh",
    database: "shipping"
});

const s3 = new AWS.S3({
    accessKeyId: "ASIASV7IMNY6FCNM2BJ5",
    secretAccessKey: "6lEN+aubL+YhPbgoXmlen4jpZH06Wgtjsz+SXAJ1",
    /*if you are using educate account include this here*/
    sessionToken:"FQoGZXIvYXdzEJ///////////wEaDEVGeNVl861TtPVC7iKWAs83Vdg13Sx7nYNuDxpf9RrII2OJEn/ZID4YJznhQd7nYjCQTrKzAeL8EuxQMoFxQB2RQ11Nl/2MwCAa7HgJjg1FUrBSZNsCRfQmT7b05gZPny3iOaulgg4J4pfSiOfX5vmgMJMTMexvIAIPz/ADmd2lY0wJ8yNdf+dj2KUMxraUJwwe8+bFzdpN9Q/Hd5kpcV38bEscqnmgjVclFHBkST6COAK09Q/9NWzAeEkb30pz1MoJz7nDE23yNaOilzX6YWO6vSIRdzEdKwToEFbCyf1nU6g0x2neYLdencPRYpKKmItY5HP/N1Nd3+a4FQwPjK9wpFCpvvJ1XkhvfAzXSArsyhr5JCh5jseFUug8QNkpVQK5CGT+KN6npe0F"
    });

// exports.handler = (event, context, callback) => {    
//         var name = event.name;
//         var email = event.email;
//         var add = event.add;
//         var comment = event.add;
//         var flag = 0
//     //res.writeHead(200,{'Content-type':'text/html'});
//         connection.connect(function(err){

            // if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) === false)
            // {
            //     flag = 1
            // }
            // if(/^[a-zA-Z0-9]*$/.test(name)===false)
            // {
            //     flag = 1
            // }
            // if(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(address)==false)
            // {
            //     flag = 1
            // }
//             if(flag === 0)
//             {
//             var sqlinsert = "INSERT INTO shipping.contact (name,email,address,comment) VALUES ('" +
//                  name +
//                       "','" +
//                       email +
//                       "','" +
//                       address +
//                       "','" +
//                       comment+
//                       "');";

//             connection.query(sqlinsert,function(err,result){
//                 //console.log(sqlinsert);
//                 if(err)throw err;
//                 //console.log('1 row inserted');
//             });
         
//             const uploadFile = () =>{
//                 //fs.readFile('output.txt',(err,data)=>{
//                   //if(err) throw err;
//                 const params = {
//                   Bucket: 'srishilesh',
//                   Key: 'comment.txt',
//                   Body: JSON.stringify(data)
//                 };
//                 s3.upload(params, function(s3Err, data) {
//                     if (s3Err) throw s3Err
//                 console.log(`File uploaded successfully at ${data.Location}`)
//                 });
//               //});
//               }
//         uploadFile();
        




//         }
            
//         })
        
// }

exports.handler = (event, context, callback) => {
    var params = querystring.parse(event.body)
    html = ''
    if (params['name'] === '' || params['email'] === '' || params['address'] === '' || params['comment'] === '') {
        html = 'Value wrong'
        context.succeed(html)
    }
    else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(params['email']) === false)
    {
        html = 'Wrong email'
        context.succeed(html)
    }
    else if(/^[a-zA-Z0-9]*$/.test(params['name'])===false)
    {
        html = 'Wrong Name'
        context.succeed(html)
    }
    else if(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(params['address'])==false)
    {
        html = 'Wrong Web address'
        context.succeed(html)
    }
    else 
    {
        
        connection.query("insert into shipping.contact (name,email,address,comment) values(?,?,?,?)", [params['name'], params['email'],params['address'],params['comment']], function (err, result) {
            if (err) {
                html = err
                context.succeed(html)
            } else {
                
                connection.query("select * from shipping.contact", [params['name'], params['email'],params['address'],params['comment']], function (err, result) {
                    const updata = {
                        Bucket: 'srishilesh',
                        Key: 'comment.txt',
                        Body:JSON.stringify(result)
                    }
                    s3.upload(updata, function (s3err, data) {
                        if (s3err) {
                            html = err
                            context.succeed(html)
                        }
                        console.log('File uploaded successfully at ${data.Location}')
                        html = '<div>Value entered and Uploaded<div>'
                        context.succeed(html)
                    })
                })
                
            }
        })
    }
}
