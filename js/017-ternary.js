// ternary operator ile short if kullanımı :

// eger kullanıcı adın varsa yazdır yoksa kullanıcı bilgisi -
//-bulunamadı yaz

let username = prompt ("kullanıcı bilgisi yaz")
let info = document.querySelector("#info")

// ternary kullanımı :
// kosul ? dogruysa : yanlışsa
//username.length > 0 ? username :"bulunamadı :(

info.innerHTML = `${username ? username :"bulunamadı :("}` 

















document.body.style.backgroundColor="darkgray"