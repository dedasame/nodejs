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


