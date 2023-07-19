//!Modül Kavramı - Kütüphaneler gibi
//Core Modüller: nodejs içerisinde kurulu gelen modüller
//Third Party Modülleri: 3. parti modülleri  : NPM -> Node Package Manager
//Local Modüller: kendimizin yazacağı modüller 
//CommonJS - ES Modül Kavramları


//npm init -y :JSON dosyamız oluşur
// içine "type":"module" yazarak ES Modül mantığına geçeriz
//veya uzantıları .mjs yaparak da ES Modülünü kullanabiliriz.

/*
!Default import***
import data from "./userData.js"
console.log(data)
*/

/*
!tek tek import ediyoruz
import {time,userData,printName} from "./userData.js" //kullanıladığı zaman import edilmiyor bellekten kazanç*
printName()
*/

/*
! Hepsini aynı anda import etmek için
import * as data from "./userData.js"
console.log(data)
console.log(data.userData)
data.printName()
*/

/*
import {data1 as a,data2 as b} from "./userData.js" //şeklinde de data1 i a olarak alıp kullanabiliriz
console.log(a)
*/





