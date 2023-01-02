// Fonksiyona Parametreler(params) Atamak ve Fonksiyondan Geri
// Dönüş (return) Almak ******

// Temel Kurallar:
/* 1: Bir Fonksiyon Bir veya Birden Fazla parametre alabilir
yada hiç almayabilir.
 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veye
 göndermeyebilir.
 3: Mümkünse Fonksiyonun bağımlılıklarını azaltmak
 gerekir. */

 let firstName = "lorem"

 function greetings (firstName="", lastName="") {
    //console.log(`merhaba ${firstName ? firstName :""}`)
    console.log(`merhaba ${firstName}`)
    console.log(`merhaba ${firstName} ${lastName}`)
 }
 console.log(firstName) // değişken  
 greetings()  // fonksiyona parametre göndermedik
 greetings("parametre")
console.log("-----")

function greetings2(firstName, lastName) {
  let info =`Merhaba ${firstName} ${lastName}`
  return info
} 
let greetingsInfo  = greetings2("ad","soyad")
console.log(greetingsInfo)

console.log("-----")

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`)
  domObject.innerHTML = info
}
let htmlInfo = `<span style="color:green">Color Greeen</span>`

domIdWriteInfo("info",htmlInfo)