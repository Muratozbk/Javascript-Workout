// Fonksiyona Parametreler(params) Atamak ve Fonksiyondan Geri
// Dönüş (return) Almak ******

// Temel Kurallar:
/* 1: Bir Fonksiyon Bir veya Birden Fazla parametre alabilir
yada hiç almayabilir.
 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veye
 göndermeyebilir.
 3: Mümkünse Fonksiyonun bağımlılıklarını azaltmak
 gerekir. */



let firstName = "Lorem"

function greetings(firstName="", lastName="") {//default parametre
   //console.log(`Merhaba ${firstName ? firstName : ""} `)       
   console.log(`Merhaba ${firstName}`)
   console.log(`Merhaba ${firstName} ${lastName}`)
} 

console.log(firstName) // değişken
greetings() //fonksiyona parametre göndermedik
//greetings("Parametre")
greetings("Parametre")

function greetings2(firstName, lastName) {
   let info = `Merhaba ${firstName} ${lastName} `
   return info
}


let greetingsInfo = greetings2("ad", "soyad")
// let info ="deneme" //??
console.log (greetingsInfo)

function domIdWriteInfo(id, info) {
   let domObject = document.querySelector(`#${id}`)
   domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDD</span>`
//domIdWriteInfo('greeting', greetings2("lorem", "ipsum")) //("ad","soyad") 

domIdWriteInfo('greeting', htmlInfo ) //("ad","soyad") 
domIdWriteInfo('info', greetings2("lorem", "ipsum")  )