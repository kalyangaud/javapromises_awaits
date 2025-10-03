const { resolve } = require("path");

console.log("at the top of the screen.");
function promisifiedTimeout(){
    console.log("function called 3")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("inside promise callback 4");
            resolve("Done baby! I am burnt out.");
        })
    })
}
let p = promisifiedTimeout();
p.then((res)=>{
    console.log("congratulation on successful program conduction...")
})