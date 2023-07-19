//HATALAR

//*Operational Errors
/*
System is out of memmory 
Request timeout
*/

//*Programmer Errors
/*
hataları döndürmenin 4 farklı yöntemi
1-Throw - hata fırlatması
2-Callback 
3-Promise Rejections
4-EventEmitter
*/

//!ERROR OBJECT

/*
var error = new Error("Test Hatası")
console.log(error) //error.name - message - stack
*/

//*RangeError : verilen değer izin verilen aralıkta değilse
/*
var a = 3.14
console.log(a.toFixed(200))
*/

//*ReferencedError : değişken mevcut scopeta tanımlı olmadığı zaman
/*
function test(){
    var a = 3
}
console.log(a)
*/

//*TypeError : beklenen veri tipinde değil, değiştirilemeyen veri, üzerinde işlem yapılamayan durumlar(undefined)
/*
var object = {name:"Eren"}
console.log(object.age.num)
*/

//*SyntaxError : söz dizimsel olarak anlamsız birşeyler olduğu zaman
/*
. () 123 asd ** 
*/

//? HATALAR İLE BAŞ ETME
// Throw Callback Promise Rejections EventEmitter

//*try -catch - finally 
/*
try{
    console.log("Başladı.")
    throw new Error("TRY HATASI") //bu şekilde hata atıldığı zaman program çalışmayı durdurur
}catch(e){
    //throw new Error("CATCH HATASI")
    console.log("Hata yakalandı")
}finally{
    console.log("Bitti")
}

//bittikten sonra hatayı yazdırır
//catchde de bir hata oluşma söz konusu ise finally kullanılır catch çalışmaz

//process : programın çalışmasını durduramadı 
//try catch de yakalanmamış hataları yakalar
process.on("uncaughtException",e => {
    console.log("Bir hata yakalandı.")
})
// throw new Error("HATA")
console.log("QWEQWEQWE")
process.exit() //programı durdurur.
*/

//*callback ile döndürülen hatalar

//bri dosyadan mesajı okuyor
//dosya yoksa erroru alır
/*
import fs from "fs"
fs.readFile("./a.txt","utf-8",(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})

function getUserData(id,callback){
    //var user = {name: "Eren"}
    var user = undefined
    if(!user) return callback(new Error("User not found "))
    callback(null,user)
}

getUserData(1,(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})

*/

//* EventEmitter
//socket.io : gerçek zamanlı 
//socket.on("error") //hata olduğu zaman bu şekilde alınır 







