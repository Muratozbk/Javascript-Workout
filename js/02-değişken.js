//*** let ve const ile Değişken tanımlama */

// var ile değişken tanımlama
//var serverName = "api.kodluyoruz.org"
//console.log(serverName)

//************** */
//let ile değişkeni boş tanımlamak
let serverName;
console.log(serverName)

//let ile değikene bilgi atamak
serverName = "https://kodluyoruz.org"
console.log(serverName)

//******************** */
//let ile değişkeni bilgi atayarak tanımlamak:
let password = "1234"
console.log(password)

//değişken ataması yapmadan önce kullanmaya çalışmak:
/* hatalı kullanım
console.log(fullName)
let fullName = "murat ozbek"
*/

let fullName = "murat ozbek"
//let ile tanımlanan bilgiyi değiştirmek:
fullName = "muratik"
console.log(fullName)

//birleştirme-ekleme işlemi
fullName + "yeni eklenen bilgi"
console.log(fullName + " test")

fullName = fullName + " Yeni Bilgi1"
console.log(fullName)

fullName = " 2. Bilgi " + fullName
console.log(fullName)

fullName = "Sıfırlandı"
fullName += " ve yeni bilgi eklendi"
console.log(fullName)
fullName = "en son isim"
fullName += " ek1"
fullName = "ek2 " + fullName
console.log(fullName)
//**************** */

// const ile değişken tanımlamak:
//const serverPassword; //sadece değişken tanımlandı,içi boş.Yanlış yöntem

//const ile değişken tanımlamak
const Server_Password = "abc123"
console.log(Server_Password)  

// Server_Password = "1234"
// console.log(Server_Password)