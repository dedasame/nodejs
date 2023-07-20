//pending -> iş arka planda bitirilmeye çalışılıyor
//resolve -> fulfilled (başarılı) 
//reject -> rejected (hata alınmış)

/*

const result = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("Timeout Bitti")
        resolve()
    },3000)
})


//await'den önce promise yapısı ddaha çalışmayı bitirmediği için false alıyorduk
//*await kullanmadan: .then() .catch() .finally()

result
    .then(value => console.log(value)) //çalışırsa
    .catch(error => console.log(error)) //hata yakalarsa
    .finally(()=> console.log("BİTTİ")) //bittikten sonra

console.log("Bitti")

*/

//Önceki return edilen değer altta da kullanılabiliyor
/*
import fetch from "node-fetch"

fetch("https://www.google.com.tr/?hl=tr")
    .then(res => res.json())
    .then(response => console.log(response))
*/

/*
async function test(){

    async function test2(){

        await new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        })
    
        console.log("BİTTİ")
    }
    
    test2()
}

await test() //bu await sadece ES modüllerde olur ve async olarak belirtilmesi gerekir

console.log(test)

//fonksiyon içinde await kullanamk için belirtmek gerekiyor async olduğunu
//awaitin ilk üstündeki fonksiyonun async olduğunu belirtmemiz gerekiyor

*/

/*
var array = [1,2,3,4]

array = await Promise.all(array.map(v => new Promise((resolve,reject) => setTimeout(()=> resolve(v*2)),1000)))
console.log(array)
*/

//Promise.any() -> resolve edilen ilk değeri alır
//Promise.race() -> resolve ya da error ilk elemanın verdiği cevaba göre hareket eder

/*
Promise.all(array.map(v => new Promise((resolve,reject) => setTimeout(()=> resolve(v*2)),1000)))
    .then(result => console.log(result))
*/

//hepsinin bitmesini beklememiz gerek(4 elemanın hepsi)


//*util
import { resolve } from "path"
import {promisify} from "util"

var sleep = promisify(setTimeout)


sleep(3000)
    .then(()=> console.log("3 saniye beklendi"))


await sleep(3000)

console.log("3 saniye beklendi")










