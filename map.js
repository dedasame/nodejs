
var map = new Map()

map.set("a",1) // key , value
map.set("b",2)

/*
console.log(map.get("a")) //key'e göre value alma

//map.delete("b") //keylere göre silme

map.has("a") //key sorgulama

//map.clear()//içini 0'lıyor

console.log(Array.from(map.keys())) //key verir - arraye çevirir

console.log(Array.from(map.values())) //value verir - arraye çevirir

console.log(Array.from(map.entries())) //ikili verir - arraye çevirir

console.log([...map]) // .keys - .values ile de alınabilir

*/


//! Iterable -> Üzerinde döngülerle gezinilebilir

/*
map.forEach((value,key)=>{
    console.log(value,key)
})



for (var [key,value] of map){
    console.log(key,value)
}

*/

console.log(Object.fromEntries(map))


//*Kopyalaması

var map2 = new Map(map)
map2.set("a",3)

console.log(map,map2)

console.log(map.size)//büyüklüğünü verir

//Nesnelerde ilk kısmının string veya symbol olması gerekirken mapte öyle bir zorunluluk yok.
//(num,fonksiyon ya da nesneye karşılık verilebiliyor)

//mapde eklenme sırasına göre kayıt ediliyor nesnelerde değişik

//map da size almak daha basit nesnede lsiteye çevirip almak gerekiyor

//map iterable döngülerde dönülebiliyor. 


//* Map Dezavantajı : json.stringfy .parse yapılamıyor. -> objeye çevirdikten sonra yapılabilir.





