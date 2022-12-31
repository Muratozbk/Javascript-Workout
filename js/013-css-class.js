// ********* CSS Class eklemek yada çıkarmak ********
document.body.style="background-color: darkgray"

let greeting = document.querySelector("#greeting")
//class eklemek: .add("")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class", "third-class")

//class silmek: .remove("")
greeting.classList.remove("title", "second-class", "third-class")

console.log(greeting.classList)