// Object içine nasıl metot ekleriz

let user1 = {
     firstName: "Bilgin",
     lastName: "Uzman",
     score: [1, 2, 3, 4],
     isActive : true,
     shortName: function() 
     {return`${this.firstName[0].toUpperCase()}.      
     ${this.lastName}`}
};
console.log(user1)

//*** 042-Object ve Array Destructuring Nasil Kullanılır:***
// Object Destructuring:

let settings = {
    userName: "LoremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName:"kodluyoruz.org"
}

//Obje içindeki bilgilerin tek seferde çıkarılması:
//let userName = settings.userName
//console.log(userName)
let {userName: user, password, isActive, ip: serverIp, serverName} = settings
console.log(user, password, isActive, serverIp, serverName)
console.log(user)

//Obje içindeki bazı bilgilerin çıkarılması
let {userName:userName2, password:password2, isActive:isActive2,
     ...newSettings}= settings
//Eger değişken ismi önceden tanımlanmdıysa:
// let {userName, password, isActive, ...newSettings} = settings
console.log("newSettings",userName2,password2,isActive2,
     newSettings)

//**** Objenin destructuring ile kopyalanması  *******

// let settings2 = settings     hatalı yapı!!!!
// settings2.userName = "Degisen Bilgi"
// console.log("set1",settings)
// console.log("set2",settings2) !!!!!

let settings2 = {...settings}   //Dogrusu!!!
settings2.userName = "Degisen Bilgi"
 console.log("set1",settings)
 console.log("set2",settings2)

 let score = [100, 200, 300, 400]
 let [score1, score2, ...otherScore] = score ;
 console.log(score1, score2, otherScore)

 //object kopyalama ile aynı... let setting2= {...settings}
 let copyofScore =[...score] 
 console.log(copyofScore)
 copyofScore[0] = 5
 console.log(copyofScore)