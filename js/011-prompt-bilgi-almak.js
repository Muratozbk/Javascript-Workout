//**** prpmpt ile kullanıcıdan bilgi almak */

let fullName = prompt("Lütfen Adınızı Giriniz:")

let greeting = document.querySelector("#greeting")

console.log(greeting)

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`
