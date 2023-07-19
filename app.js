//!Modül Kavramı - Kütüphaneler gibi
//Core Modüller: nodejs içerisinde kurulu gelen modüller
//Third Party Modülleri: 3. parti modülleri  : NPM -> Node Package Manager
//Local Modüller: kendimizin yazacağı modüller 
//CommonJS - ES Modül Kavramları
//npm init -y :JSON dosyamız oluşur
// içine "type":"module" yazarak ES Modül mantığına geçeriz
//veya uzantıları .mjs yaparak da ES Modülünü kullanabiliriz.

//?LOCAL MODULLERLE İLGİLİ KISIM

/*
!Default import***
import data from "./userData.js"
console.log(data)

!tek tek import ediyoruz
import {time,userData,printName} from "./userData.js" //kullanıladığı zaman import edilmiyor bellekten kazanç*
printName()

! Hepsini aynı anda import etmek için
import * as data from "./userData.js"
console.log(data)
console.log(data.userData)
data.printName()

import {data1 as a,data2 as b} from "./userData.js" //şeklinde de data1 i a olarak alıp kullanabiliriz
console.log(a)
*/

//? THIRD PARTY MODULLERLE İLGİLİ KISIM
/*
//node-fetch -> ES
//express -> Commonjs

//Third Party Modülleri


//!node-fetch ES

import fetch from "node-fetch"
fetch("")

//!express Commonjs
 
import * as express from "express"
//express.

//ES modülde common çalıştırabilirken commonjs de ES çalıştıramayız



//?KOŞULA BAĞLI IMPORT ETME

var a = 5
if(a == 5){
    var response = await import("./userData.js")
    console.log(response.default)

}


*/

