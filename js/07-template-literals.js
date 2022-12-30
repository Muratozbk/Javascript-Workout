// Template Literals Kullanımı:``backtick ``

let userName = "murat"
const DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN

//console.log("Merhaba", userName, "hoşgeldin", "mail adresin:", email)

let info = `Merhaba ${userName} hosgeldin.. 
mail adresin: ${email}

kısa isminiz: ${userName[0]}.

mail uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
günün saat bilgisi : ${new Date().getHours()}:${new Date().getMinutes()}
`

console.log(info)
