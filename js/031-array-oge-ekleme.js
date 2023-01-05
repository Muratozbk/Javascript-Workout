// Array yapısına öge eklemek ve istenen ögenin çıkarılması

let items = [10, 20, 30, 40, ]
console.log("ilk hali",items)

// Array: sona öge eklemek -> push
items.push(50)
console.log("50 eklendi",items)

//Array: en basa öge eklemek -> unshift
items.unshift(5)
console.log("5 eklendi",items)

//Array: Sondaki ögeyi çıkarmak -> pop
//items.pop()
 let lastItem = items.pop() //son eleman lastItem içerisine eklendi!
console.log("lastItem",lastItem, "items", items)

//Array ilk öğeyi çıkarmak -> shift ilk ögeyi çıkartır
let firstItem = items.shift()
console.log("firstItem", firstItem, "items", items)

//Array içindeki bir ögenin bilgisinin degiştirilmesi:
items[0] = 5;
 console.log(items)

 items [items.length - 1] = 41
 console.log(items)

 items[2] = 115;
 console.log(items)