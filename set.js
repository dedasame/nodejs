
//SET : Kümeler -> Arraylere benziyor
//Farkı: Bütün değerler benzersiz uniqe olmalı
//ekleme sırasına göre 

var kume = new Set(["b","a","c","a","a"])

kume.add("a") //ekler
kume.add("g")

kume.delete("c") //siler

console.log(kume)

console.log(kume.size)

//İçerisinden değer almak için arraye çevirmemiz gerekiyor: 

console.log(Array.from(kume)[0]) 

console.log([...kume][0])

//bu metotlarda işe yarar 
/*
kume.keys()
    .values()
    .entries()

*/

console.log(kume.has("a")) //bu value var mı? -> Array.includes'a göre daha hızlı çalışıyor



var sett = new Set("test") 

console.log(sett) // { 't', 'e', 's' } her değerden 1 tane


