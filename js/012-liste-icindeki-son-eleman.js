// 012 liste icerisindeki son elemana ulaşmak
//    veya eleman eklemek  //

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öge degistirildi"
console.log(lastChild)

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk öge degistirildi"
console.log(firstChild)

//Yeni öge ekleme: .append()
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li") //''
let liDOM2 = document.createElement("li")
liDOM.innerHTML = "kendi oluşturduğumuz öge"
liDOM2.innerHTML =" son öge"
// ulDOM.append(liDOM) // En sona ekler
ulDOM.append(liDOM2)
// En başa ekler: .prepend()
ulDOM.prepend(liDOM)  