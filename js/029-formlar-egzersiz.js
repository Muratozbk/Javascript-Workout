// FORMLARLA CALIŞMAK: Bölüm Sonu Egzersizi:

/*
1: Formu Seç
2: Input Bilgisini UL içerisine Ekle
3: Form içindeki bilgiyi sıfırla
4: Eğer forma bilgi girilmezse kullanıcıyı uyar
*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="info") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")
   
    if (USER_NAME.value && SCORE.value ){ 
        addItem(USER_NAME.value, SCORE.value) //gönderdikten sonra sıfırladık
        USER_NAME.value = ""
        SCORE.value = ""
    }   else {
        alertDOM.innerHTML=  alertFunction(
            "Başlık Bilgisi",
            "Hatalı Bilgi",
            "danger"
            )
    } 
}

/* <li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span>
</li> */

let userListDOM = document.querySelector("#userList")
 
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML =`
      ${userName} 
      <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
 }
