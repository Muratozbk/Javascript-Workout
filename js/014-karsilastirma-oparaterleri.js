//**** Karşılaştırma Operatörleri ve Mantıksal Operatörler */

let price = "100"
let user = "guest"

// == Eşitse ==
console.log("== :", price == 1)
console.log("== :", price == 100)

//=== Hem değeri hem türü eşitse ===
console.log("=== :", price === 1)
console.log("=== :", price === 100)

// != Eşit Değilse !=
console.log("!=",price != 1)
console.log("!=",price != 100)
console.log("!=",user != "guest")

// < Küçükse <
console.log("<",price < 1)
console.log("<", price < 101)

// <= Küçük Eşitse <=
console.log("<=",price <= 100)

// > Büyükse >
console.log(">",price > 50)

// >= Büyük Eşitse >=
console.log(">",price >= 100)

// && ve
user = "murat"
price = 0
console.log( price > 0 && user != "guest" )

// || veya-or ||

console.log( price > 0 || user != "guest")

// ! değil (tersi) not !
user = "guest"
price = 1
console.log( price > 0 && !user == "guest")
console.log(!( price > 0 && user == "guest"))





























// console.log(typeof (price))






























document.body.style.backgroundColor="darkgray"