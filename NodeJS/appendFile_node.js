var fs = require('fs')

fs.open('newAppend.txt','r',function(err,data)
{
    if(err) throw err;
    console.log('Saved');
    console.log(file);
});