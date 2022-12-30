//**** String Veri Türü İşlemleri */

let email = "muratoz@gmail.com"
let firstName = "murat"
let lastName = "OZ"

//String karakter sayısı -> length
console.log( email.length )

//İlk Karekteri Bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(1))

//Büyük harf / Küçük Harf Yapmak:
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String içinde istedimiz bilgiyi aramak -> search:
console.log(email.search("@"))
console.log(email[7])
//olmayan bir şey aratırsan -1 sonucu verir

//Belli bir yere kadar al -> slice : (domain bilgisi)
let DOMAIN = email.slice(email.search("@")+ 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf(".")) //sadece gmail kısmını aldık   
)

// Bilgiyi Değiştir -> replace :