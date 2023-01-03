// DOM etiketleriyle çalışmak

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick(){
      console.log("tiklandi")    
      this.style.color == "green" ? this.style.color = "black" : this.style.color ="green"
} 


/* let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick)

function domClick(){
      console.log("degisti")    
      this.style.color == "green" ? this.style.color = "black" : this.style.color ="green"
} */