const express = require('express')
const app = express()
const formidable = require('formidable')
const fs = require('fs')
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    accessKeyId: "ASIASV7IMNY6H63QZ45N",
    secretAccessKey: "bjaKar3ravELFQpEnS0q195E6UmYTTPKlTeYDvVB",
    /*if you are using educate account include this here*/
    sessionToken:"FQoGZXIvYXdzEPP//////////wEaDLYvJlHdXBhT6aIoRSL8BJYF4M6lhPAhaYlceR9v0HfUMl/TW57vuk5tI7YPbpzhRcaUroR7Wu9mbvnAz5CdK4QizK6pUjkUBxtFon8Pf7ZIJZHdhXXHvXYhPUWK/duc/TTfheTvveFMgN56ogiE8iretxeC4eyJpj8CW9UUPu7M4LE0wXdGPglwq8QiNMaXWR1ihj4UmY465+gTz2qGufn6zG2Klu/b4nAq8VrDHdAvmReCyh0kenYx8rAd8QQiMFkHRuvny7KCw17rYEfPMA1NPCiw4RAAhnY5cOA34AhQmi3zLbMvyO9ZBJqBJKw26wvjdAtgFYspDwSmAZEQcbwLvYT3splDRoJSBIw0RzojoyN7hyUxSHM1HF/u3NctXVCtbWkRXnHV5/PWqVJrsDOui2VyiAExTV64qX1WDHm1kc1yV/2cej359IHKyRndDwqbgYsTh3rBwDAzW2CtgjXY+VvC2re/RQXAoj/xe6U5FkWnYG4QY36g/m+9hQV8euMgF8hZZB5WMZndWsl6yBZSy6yLEc2KIf+l6W1wfvBBlsztfScXJ/D4szG0hq4OSTx9lBg+DT5I9/ewxAp9N6bsSP2mgojcAIO0b2I/aJxT0Xtb2P+kXhyD12yDL+aaEmcRATO1EXAd9TgCr5Ea0jGnmq8waUdu8JT7ywKg3SUSZAQVAK6qSAt7LTtJL4BVKZ00tY6M/0OBEp0KgnN+/LapUYDvm5gIUqlKxOqwRWmNFtoHStPi6PilOiPcuSsDNrfCDvFeSCCF27ZOnuHdT5hqrs2yUUcegqAlarUgV7KJ9Q0hpcwbBVuJygfNtdTc9cVle6dusolKKWN0H89Fg4xxWLE0Ri+D7l827ijZkebqBQ=="
    });

app.post('/abc', (req, res) => {
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
    
}).listen(8081);
console.log("Server listening in http://localhost:8081/abc");



