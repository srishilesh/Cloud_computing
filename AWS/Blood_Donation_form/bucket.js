const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
accessKeyId: "ASIASV7IMNY6EYHAPTCA",
secretAccessKey: "Y1EaRo8vEpkT3Zt8mb/XiPOyyHTx7Ku/gqp0ag+j",
/*if you are using educate account include this here*/
sessionToken:"FQoGZXIvYXdzEPf//////////wEaDO8460hHE7eq6MXvACKSA72+LCiIp6/0mSDlk3TX9VMmFx6RG9fPUUYhQj2gMf/sLDz9qVB9w5zK3+fKAVZiOnx0wOSIQ5gYAimRkQDf4zwIlyG7LxKwZ76yMvVKEcWKyIQwfhFusvy5uBjNePEm5hGog3c8SGVKvMMyGDDdenOKB2Qep9lEuzGaWl2ZHzN++OlYkBWN57XiGlc/aWFw9ZsrGwZXpxFjv9uLXj3dnngmclqH/iZrsTs0AuPJ2LUAP0IrfWHFbigcCr3HiZlCAsRZ45wS0pZo/TQ+4CDUiYY/b5coimUmF0qGwLsCUgRcUGxOZu7ZHTtnRpHVjgjm8DDJRVkQ6gKh3C/GXG3ReAoQokj17w+vXBCv6r62vUeBY/1w12E32ilbxY0lfIkZdjbkELlya2zXKzEc7ebIDiNeb7E5DRmR0If28pNJtKewFazvZIM8dWW3N9HHJh1ikdtbAQHNGpfj89SiLSEjJhTWPeAPKJOaFhz/1r27CmivLUu9Qjpbh+vmoH9+29n7fQqXfW+AEMc8YligMMnPwYk2yiig4q7qBQ=="
});

const fileName = 'front.html';
const uploadFile = () => {
fs.readFile(fileName, (err, data) => {
    if (err) throw err;
const params = {
Bucket: 'srishilesh', // pass your bucket name
Key: 'front.html', // file will be saved as testBucket/
Body: JSON.stringify(data, null, 2)
};

s3.upload(params, function(s3Err, data) {
    if (s3Err) throw s3Err
console.log(`File uploaded successfully at ${data.Location}`)
});
});
};
uploadFile();