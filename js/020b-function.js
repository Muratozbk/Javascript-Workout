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

 function greetings2 (firstName, lastName) {
   let info = `merhaba ${firstName} ${lastName}`
   return  info
 }

 let greetingsinfo = greetings2("ad","soyad")
 console.log(greetingsinfo)

 function domIdWriteInfo(id, info){
   let domObject = document.querySelector(`#${id}`)
   domObject.innerHTML = info
 }
let htmlInfo = ` <span style="color:red"> Color REDDDD </span> `

 domIdWriteInfo('greeting', htmlInfo)
 domIdWriteInfo('info', greetings2("ad" , "soyad" ))

