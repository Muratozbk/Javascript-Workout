
let counter = Number(localStorage.getItem("counter"))
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")


increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent (){
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem("counter")
    counterDOM.innerHTML = counter
}
counterDOM.innerHTML = counter

let infoDom = document.querySelector("#info")
infoDom.innerHTML = Number(localStorage.getItem("counter"))