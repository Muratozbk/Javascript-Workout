// Array dizi Metodları ve Array içinde Array

let items = [1, 2, 3, 4, 5]

// Array içinde Array
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)

console.log(items)
console.log(items.length)
console.log(items[0][0]) // Ayşe bilgisine ulaştık
console.log(items[0].length)

//Array içerisindeki ögeleri ayırmak -> splice(pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems:", newItems)
console.log("items:", items)

//Array içerisindeki bilginin index bilgisini bulmak-> indexOf('value')
items.unshift("loremU") //kaçıncı sırada  olduğunu gösterir
items.push("ipsumP")
console.log(items.indexOf("ipsumP"))

//Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(copyItems)

copyItems.pop() // son ögeyi cıkarttık
console.log("copy",copyItems)
console.log("items",items)

copyItems = items.slice() //kopyalama yaptı
copyItems.pop()
console.log("copy",copyItems)
console.log("items",items)

let es6Items = [...items] // es6 sonrası koyalama [...items]
console.log("es6",es6Items)

//iki array bilgisini birşleştirmek -> [...es6, ...es7]
let allUsers = [...femaleUsers, ...maleUsers] //birden fazla array yapısı birleştirildi
console.log(allUsers)

//Array içerisindeki bilgiyi stringe çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

//İstediğiimiz index bilgisine göre öge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
console.log(allUsers)
allUsers.splice (Math.floor(allUsers.length /2), 0, "Liza")
console.log(allUsers)
