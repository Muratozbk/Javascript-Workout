// array - dizilerle çalışmak []

//array oluşturmak
let domain ="kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // boş liste

// Array içerisindeki Eleman Sayısını Öğrenemk
console.log(
    items.length // array içindeki öğe sayısı
)

//Array içindeki ilk elemanın açğırılması
console.log (items[0])

//ortadaki elemanın çağırılması
console.log("ortadaki",
    items [ Math.floor(items.length / 2)]
)

//son elemanın çagırılması
console.log(items[items.length - 1])

// Değişken içerisindeki bilginin Array olup olmadıgının kontrol edilmesi
console.log(
    typeof(items)// object çıktı
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> true verir?
console.log("[] :", Array.isArray([]) )

console.log("1 : ", Array.isArray(1) )
console.log("true : ", Array.isArray(true) )

// document.querySelector("#info").innerHTML = items.length




document.body.style="background-color: darkgray"