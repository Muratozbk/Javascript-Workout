// **** Coklu Kosullarla Çalışmak else if
let username =  prompt("kullanıcı adınız:")
let age =  prompt ("Yasınız")
let info = document.querySelector("#info")

// if (username && age >= 18) {
//     console.log("ehliyet alabilir")
// } else if (!username) {
//     console.log("kullanıcı adınız yok")
// } else if (!(age >= 18)) {
//     console.log("yaş bilgisi yok veya 18den ufak")
// }

// if (username && age >= 18) {
//     info.innerHTML = "ehliyet alabilir"
// } else if (!username) {
//     info.innerHTML = "kullanıcı adınız yok"
// } else if (!(age >= 18)) {
//     info.innerHTML = "yaş bilgisi yok veya 18den ufak"
// }

// if (username && age >= 18 ) {console.log("passed")
// } else if (!username) {console.log("isim gir")
// } else if (!(age >= 18)) {console.log("yaş gir")}

// if (username && age >= 18 ) { info.innerHTML = ("passed")
// } else if (!username) {info.innerHTML = ("isim gir")
// } else if (!(age >= 18)) {info.innerHTML = ("yaş gir")}


if (username && age >= 18) {info.innerHTML =("geçti")} else if (!username) {
    info.innerHTML = ("isim yaz")
} else if (!(age >= 18)){info.innerHTML = ("kremyap")}










document.body.style.backgroundColor="darkgray"