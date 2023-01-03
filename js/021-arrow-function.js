// Arrow Function Kullanımı: =>
function hello(firstName) {
    console.log(`${firstName}!`)    
}
hello("JavaScript")

const helloFuncV1 = (firstName) => {
    console.log(`${firstName}!`) 
}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`${firstName}!`)
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) =>
 console.log(`${firstName}! ${lastName}`)
helloFuncV3("helloFuncV3", "last name info")

const helloFuncV4 = (firstName, lastName) =>{
let info = `${firstName}! ${lastName}!`
 console.log(info)
 return info}

 helloFuncV4("helloFuncV4", "other info")