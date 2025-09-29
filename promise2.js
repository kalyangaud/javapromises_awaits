const fs = require('fs');
function myReadFile()
{
    console.log("inside my file");
    return new Promise(function(resolve)
{
    console.log("inside promise");
    fs.readFile("a.txt","utf-8",function(err,data)
    {
        console.log("before resolve");
        resolve(data);
});
})
}
function onDone(data)
{
    console.log(data)
}
var a=myReadFile();
a.then(onDone);
console.log(a);