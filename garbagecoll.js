// a  = 31 //hiçbir şey kullanamdan değişken tanımı yapılabiliyor commonjs'te

//* var - let - const 

//var -> fonksiyon içinde olmadığı sürece global değişkenler oluyor
//let - const -> yalnızca bulunduğu scope içinden erişilebiliyor
//let -> let olarak tanımlandıktan sonra var const şeklinde yazılamaz ve tekrar let a = ? yapılamaz.
//const -> 1 kere tanımlanıyor ve değiştirilemez - yeni değer atılamaz -> nesne ise içindeki değerleri değiştirebilriz

//* Garbage Collector - Memory Management - Memory Leak
//Kullanılmayan değişkenlerin silinmesi gerekir:
//javascripte otomatik çöpler toplanıyor:
//bir veri ulaşılamaz olduğu zaman bellekten silinir.
//veri ihtiyacının olunmadığı yerlerde ulaşılamaz olsun ve bellekten silinsin


//* Hoisting ve TDZ

//Hoist : değişkenler üste alınıyor -> declare tanımlıyor

//Declare - Initialization - Assignment 
let a = 4  //declare  - > //initialization değer atamak
a = 1 //assignment  -> değeri değiştirmek
console.log(a)






