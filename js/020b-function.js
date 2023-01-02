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
// 8:15
 function greetings (firstName="", lastName="") {
    //console.log(`merhaba ${firstName ? firstName :""}`)
    console.log(`merhaba ${firstName}`)
    console.log(`merhaba ${firstName} ${lastName}`)
 }
 console.log(firstName) // değişken 
 greetings()  // fonksiyona parametre göndermedik
 greetings("parametre")
