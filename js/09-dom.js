// DOM

// hostname
console.log(document.location.hostname)

console.log(document.head)
console.log(document.body)
console.log(document.URL)
console.log(document.location)


document.body.style.backgroundColor = "aqua"

// DOM içinden öge seçimi:

//let h2 = document.getElementsByTagName("h2")
let title = document.getElementById("title")
console.log(title)
title.innerHTML ="Değişen Bilgi" 
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
console.log(link)
console.log(link.innerHTML)

link.innerHTML += " Değişti"

link.style.color = "red"
 //link.classList.add("btn")
