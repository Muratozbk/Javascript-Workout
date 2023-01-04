
/*
let counter = Number(localStorage.getItem("counter"))
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")


increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent (){
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}
counterDOM.innerHTML = counter

let infoDom = document.querySelector("#info")
infoDom.innerHTML = Number(localStorage.getItem("counter"))
*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value)}
}

let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {

    let liDOM = document.createElement('li')    
    liDOM.innerHTML = `${userName}${score} `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}