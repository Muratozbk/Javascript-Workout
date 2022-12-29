//*** Değişken Tanımlama Kuralları ****/
// https://www.w3schools.com/js/js_conventions.asp
// https://www.robinwieruch.de/javascript-naming-conventions/


//### Değişken Genel Tanımlama Kuralları:
// camelCase kullanımı:
 //let fullName = ""
 let kodluyoruzServerInfo = ""
 let ilkHarfBüyükYazılır = ""

 let firstName = "Murat"
 let lastName = " Ozbek"
 thirdName = "anac"
 fullName = "muratik"
 console.log(firstName , lastName , fullName, thirdName)

 //UPPER_CASE Kullanımı:
 const password = "1234" //yanlış kullanım
 const  PASSWORD = "1234" //doğru kullanım
 const  SERVER_PASSWORD = "1234" //doğru kullanım
console.log(SERVER_PASSWORD)
 //turkçe ve diğer diller kullanımı:
 let türkçeBilgi = 'deneme Türkçe' // yanlış kullanım
 // let turkceBilgi olmazzz!!
 let info = 'Türkçe bilgi yazdırılıyor..'
 console.log(info)

 //anlamsız değişken adları kullanmayın!

 let x  = 1;  // olmaz
 // x, y, z, k, i, e, gibi anlamsız değişken isimleri kullanmayın

 //## Ek Bilgi:
 // 1: boolean tanımlarken is/has kullanımı:
 let isActive = true
 let hasPassword = false 
 
 // 2: Line Length < 80  