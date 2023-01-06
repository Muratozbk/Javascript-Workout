// For Döngüsü

// for ([başlangıçAtaqması]); [kosulİfadesi]; [arttırımIfadesi]) {
// yapılıcak işlem }

let users =["lorem", "Ipsum", "Dolor"]

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }


// let index = 0 
// for (; index < 10; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector("#userList")

for (index = 0; index < users.length; index++) {
    const liDOM =document.createElement("li")
    liDOM.innerHTML = users[index]
    console.log(users[index])
    userListDOM.appendChild(liDOM)
}

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }