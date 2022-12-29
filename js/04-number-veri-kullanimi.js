// ****   number   ******
//  number veri turu tanımlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Oranı:", tax, 
    "Kdv tutarı:", priceTax,
    "Fiyat", total
    )
 
let stringNumber = "11"    
console.log(stringNumber)
let newNumber = Number (stringNumber)
console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi", Number("111"))

// attırma ve azaltma işlemleri:
let counter = 320
counter = counter + 1 //uzun yöntem
counter += 1;
counter ++ 
console.log(counter)

counter -- ;
counter -= 1 ;
console.log(counter)

counter *= 10 ;
console.log(counter)

counter /= 2 ;
console.log(counter)

//işlem önceliği
console.log(2 + 3 * 10)
console.log( (2 + 3) * 10 )

//mod(kalan) alma %:
//sayı tekmi çiftmi?
console.log (15 % 2) // kalan 1 ise tek
console.log (14 % 2) // 0 ise çift

// 8 ürün alan koliye tüm ürünler sıgıyor mu?
console.log("Koli kalan urun", 18 % 8)

//üs alma **:
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4 )
console.log(4 ** 4)

// aşağı yuvarlama : Math.floor
console.log("Aşagi Yuvarlama", Math.floor(2.7))

//yukarı yuvarlama : Math.ceil
console.log("Yukari Yuvarlama", Math.ceil(4.71))

// yakına yuvarlama: Math.round :
console.log("yakına yuvarlama", Math.round(3.4))