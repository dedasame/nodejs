
/*
function test(callback){
    setTimeout(() => {
        console.log("TIMEOUT ÇALIŞTI")
        callback()
    }, 3000);
}

test(()=> console.log("PROGRAM BİTTİ"))
*/


import fs from "fs"

/*
const data = fs.readFileSync("./a.txt",{encoding: "utf-8",flag:"r"}) //Synchronous (Blokluyor)
console.log(data)
*/

fs.readFile("./a.txt",{encoding: "utf-8",flag:"r"},(err,data)=>{
    if(err) return console.log(err)
    console.log(data)
}) //Asynchronous

console.log("BİTTİ")






