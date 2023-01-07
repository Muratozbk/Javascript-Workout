

//   const LOREM_LIST = [
//     'lorem', 'ipsum', 'dolor', 'amet', 'consector', 'adispice', 
//     'elit'
// ]

// let counter= 0
// while ( counter< 10) {
//     console.log(counter)
//     counter ++
// }

// let userName= "";
// while (!userName){
//     userName= prompt("isim yaz")
// }

// let ip ="";
// while (! (ip<100 && ip> 0)){
//     ip = prompt("ip yaz")
// }

// for(; counter<10 ; counter ++){
//     if (counter==5){continue}
//     console.log(counter)
// }

// const UL_DOM=document.querySelector("#userList")
// let index = 0
// for(;index< LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == "dolor") {break}
//     const LI_DOM =document.createElement("li")
//     LI_DOM.innerHTML=(LOREM_LIST[index])
//     UL_DOM.append(LI_DOM)
// }

const PRODUCTS = ["laptop", "Phone", "Speaker", "Desktop Pc","Server",
"Mouse", "Keyboard"]

PRODUCTS.forEach((product, index, array)=> array[index] =
     product + " 111")

// PRODUCTS.forEach((product, index, array)=> array[index] =
//  `${product.toUpperCase()}`   )

PRODUCTS.forEach((product, index, array) => array[index] =
product.toUpperCase())

    console.log(PRODUCTS)