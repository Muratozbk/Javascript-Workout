// y forEach Metodu

const PRODUCTS = ["laptop", "Phone", "Speaker", "Desktop Pc","Server",
"Mouse", "Keyboard"]

// PRODUCTS.forEach((product, index, array)=> array[index] =
//     product + " 111")
PRODUCTS.forEach((product, index, array)=> array[index] =
 `${product.toUpperCase()}`   )

    console.log(PRODUCTS)

    /***
  const userListDOM = document.querySelector("#userList")

for (index = 0; index < users.length; index++) {
    const liDOM =document.createElement("li")
    liDOM.innerHTML = users[index]
    console.log(users[index])
    userListDOM.appendChild(liDOM)
}
     */
const userListDOM = document.querySelector("#userList")    
PRODUCTS.forEach( item =>{
    const liDOM =document.createElement("li")
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})