// function deneme() {
//     document.write("Fonksiyonlar konusu")
// }

// deneme()

// var deneme = function(){
//     document.write("Fonksiyon Tanım2")
// }

// deneme()

//Fonksiyona parametre atama;

// function toplama(sayi1,sayi2=0){ //default değer
//     var sonuc=sayi1 +sayi2
//     document.write("sonuç =",sonuc);
// }

// toplama( 7,5); 
// console.log("------")

/*const name = "Dev Ed";

function toUpper(text) {
 let newText  = text.toUpperCase();
    console.log(newText);
}

toUpper(name) */

// function text(){
//   return "hello";
//   return "goodbye";
// } 
// console.log(text())

let login = function(password) {
    if (password ===  'test123') {
        return "Succesfully logged in"
    } else {
        return "Password incorrect,pleast try again";
    }
}

let result = login("test123");
console.log(result);

function favNum(num) {
    return num;
}
let myFavNum = favNum(3)
console.log(`my fav num is ${myFavNum}`)

function password(a) {
    if (a.length>8) {
        return console.log(`You chose ${a}`);
    } else {
        return console.log("Not enough letters");
    }
}
password('PurpleRhino123')
password('Circle77')

