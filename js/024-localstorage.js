// local Storage işlemleri:

//let user = {userName: "muratoz", isActive: true}

 //local storage 024-025

 let user = {userName: "muratoz", isActive: true}
 console.log(user)
 localStorage.setItem('userInfo', JSON.stringify(user))
 
 let userInfo = localStorage.getItem('userInfo')
 userInfo = JSON.parse(userInfo)
 console.log(userInfo)

 // userInfo = JSON.parse(userInfo) (stringden çıkarmak için!)

 localStorage.setItem('number', 11)
 localStorage.getItem('number')