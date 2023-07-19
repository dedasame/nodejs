//EVENTS 
//Node.js - Olay tabanlı: olayları dinlemek ve cevaplayabiliriz

import {EventEmitter} from "events"

var emitter = new EventEmitter()

function clicked(){
    console.log("Clicked")
}

/*
emitter.addListener("click",clicked) //event handler - event listener (olay yakalayıcısı - dinleyicisi)
emitter.addListener("click",()=>{
    console.log("Clicked 2")
})
*/
//!addListener -> on daha kısa tek farkı
emitter.on("click",clicked)
emitter.on("click",()=>{
    console.log("Clicked 2")
})

emitter.once("tek",()=>{console.log("TEK")}) //sadece 1 kere çalışır

/*
setInterval(()=> {
    emitter.emit("tek")

},1000) //1 sn de bir tetiklenir
*/

console.log(emitter.eventNames()) //eventlerin adlarını verir
console.log(emitter.listeners("click")) //verilen olay üzerine kayıt olan listenerları gösterir
console.log(emitter.listenerCount("click")) //listener sayısını verir


//aynı event üzerine 10 tane listener yazılır 10dan fazlası için uyarı verir.
//bellek sızıntısı olabilirse. emitter.setMaxListeners(25) şeklinde 10dan fazla yazmamızı sağlar

//emitter.removeListener("click",emitter.listeners("click")[1]) 
//!Kısayolu
emitter.off("click",emitter.listeners("click")[1]) //click2 silindi


emitter.removeAllListeners("click") //bir event için yazılmış tüm listenerları kaldırır


emitter.emit("click")

 



