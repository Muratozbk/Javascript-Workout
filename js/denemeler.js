let fullName ="murat ozbek"
console.log(fullName + " test")

fullName = fullName + "  yeni eklenen bilgi"
console.log(fullName)

fullName += " ve yeni bilgi eklendi"
console.log(fullName)

let price = 100
let tax = 0.18
let priceTax = price * tax
console.log("kdv", priceTax)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)

let counter = 250
counter+= 2;
counter ++
counter-= 1
counter *=2
counter /= 2
console.log(counter)
console.log(15%4)
console.log(2**3)
console.log(Math.floor(4.7))
console.log(Math.ceil(4.2))
console.log(Math.round(4.5))

let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean("userName")
console.log(isUserName)

userName = -0.1
console.log("User Name:",Boolean(userName))
console.log(Boolean(userName, length > 47))