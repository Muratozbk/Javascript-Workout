// console.log(document.body)
// console.log(document.URL)
// console.log(document.location)
// console.log(document.location.host)

// document.body.style.backgroundColor = "rgb(222, 216, 123)"

// let link = document.querySelector("ul#list>li")
// console.log(link)
// console.log(link.innerHTML)

// let list = document.getElementById("list")
// console.log(list)
// list.innerHTML = "yeni bilgi"
// console.log(list.innerHTML)

// let link = document.querySelector("ul#list>li")
// console.log(link.innerHTML)
// link.innerHTML += " 1.ilave"
// console.log(link.innerHTML)
// link.style.color = "orange"

// let fullName = prompt("isim gir")
// let list = document.querySelector("#list")
// list.innerHTML = `${list.innerHTML}  <small style="color:blue"> ${fullName} </small>`


// let ulDOM =document.querySelector("ul#list")
// let liDOM = document.createElement("li")
// liDOM.innerHTML = "yeni oluşan öge"
// ulDOM.append(liDOM)

// let liDOM2 = document.createElement("li")
// liDOM2.innerHTML = "prependli öge"
// ulDOM.prepend(liDOM2)

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öge değiş"
console.log(lastChild)

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk öge degis"
console.log(firstChild)

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")
liDOM.innerHTML = "yeni satır 1 append"
ulDOM.append(liDOM)

let liDOM2 = document.createElement("li")
liDOM2.innerHTML = "yeni 2 prepend"
ulDOM.prepend(liDOM2)













