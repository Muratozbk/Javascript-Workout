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

// let lastChild = document.querySelector("ul#list>li:last-child")
// lastChild.innerHTML = "son öge değiş"
// console.log(lastChild)

// let firstChild = document.querySelector("ul#list>li:first-child")
// firstChild.innerHTML = "ilk öge degis"
// console.log(firstChild)

// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement("li")
// liDOM.innerHTML = "yeni satır 1 append"
// ulDOM.append(liDOM)

// let liDOM2 = document.createElement("li")
// liDOM2.innerHTML = "yeni 2 prepend"
// ulDOM.prepend(liDOM2)

// let username = prompt("kullanıcı adınız")
// if (username) {console.log(`Kullanıcı adı: ${username}`)} else {console.log("boş")}
// let age = prompt("yaş gir")
// let info = document.querySelector("#info")

// if (username && age >= 18) {info.innerHTML = ("geçtiniz")} else if (!(username)) {info.innerHTML = ("isim yaz")}
// else if (!(age >=18)) {info.innerHTML = ("sıçtınız")}

// if (username && age >= 18) {info.innerHTML =("geçti")} else if (!username) {
//     info.innerHTML = ("isim yaz")
// } else if (!(age >= 18)){info.innerHTML = ("kremyap")}

// let username = prompt("Kullanıcı Adı Gir")
// let info =document.querySelector("#info")
// info.innerHTML = username ? username: "isim yaz"

/* 
1-prompt ile alıdıgın bilgiye göre aşagıdaki yapıyı kullanarak notun
bilgisini #info'ya yazdır
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2-kullanıcının girdiğini verinin istediğimiz aralıktamı olduğunu kontrol et
3-ff bilgisine üzgün surat,diğerleri gülücük
4-ff class  bilgisi text-danger ,diğerleri text-primary olsun
*/
const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`


let examGrade = prompt("not gir")
let textInfo ;
let info = document.querySelector("#info")
  

if (examGrade >= 0 && examGrade <= 100){
    textInfo = SMILE ,
    info.classList.add("text-primary")
    if   (examGrade >= 90) { textInfo  += " AA"}
 else if (examGrade >= 85) { textInfo  += " BA"}
 else if (examGrade >= 80) { textInfo  += " BB"}
 else if (examGrade >= 75) { textInfo  += " CB"}
 else if (examGrade >= 70) { textInfo  += " CC"}
 else if (examGrade >= 65) { textInfo  += " DC"}
 else if (examGrade >= 60) { textInfo  += " DD"}
 else if (examGrade >= 50) { textInfo  += " FD"}
 
 else if (examGrade <= 49) { textInfo  =  (FROWN) + " FF",
info.classList.remove("text-primary")
 info.classList.add("text-danger")}
 
} else {  textInfo = "hatalı bilgi"}

console.log(textInfo)

info.innerHTML = `${textInfo} ${examGrade}`