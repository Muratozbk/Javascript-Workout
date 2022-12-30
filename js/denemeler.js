let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(price, stringPrice, hasPassword)
console.log(typeof(price),typeof(stringPrice), typeof(hasPassword))

let number1 = "11"
number1 = parseInt(number1)
console.log("number1", (number1),typeof(number1))

let isim = "12"
isim = parseInt(isim)
console.log("isim", (isim),  typeof(isim))

let number2 = "11.2px"
number2 = parseInt(number2)
console.log("no2", (number2), typeof(number2))

let number3 = "11.1"
number3 = Number(number3)
console.log("no3", (number3), typeof(number3))

let number4 = "11.4px"
number4 = parseFloat(number4)
console.log("no4 ", (number4), typeof(number4))

let number5 = "11.4px"
number5 = parseFloat(number5)
console.log("number5: ", (number5), typeof(number5))

let number6 = 15
number6 = number6.toString()
console.log("number6: ", (number6), typeof(number6))

//template literals:


// const DOMAIN = "kodluyoruz.org"

// let email = userName + "@" + DOMAIN
// console.log("Merhaba", userName, DOMAIN , email)




let firstName = "murat"
let lastName = "OZ"
let email = "murat@gmail.com"


firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

console.log(email.search("@"))
console.log(email[5])


let DOMAIN = email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")))

email = email.replace("gmail.com","kodluyoruz.org")
console.log(email)

console.log(email.includes("n"))

console.log (
    email.endsWith ("org")
    )

     // İlk harflerini Büyük Yapmak :
 firstName = "first"
 lastName = "lastname"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}


`

 console.log(fullName)