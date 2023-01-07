// array map kullanımı

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName içindeki orjinal isim kalsın,
// shorName içimde ilk harf büyük .
//newName içindeki ilk harf büyük olsun
// {userName:"AYSE", shortName:"A.", newName:"Ayse"}
const NEW_USERS = USERS.map ( user => user.toLowerCase())
console.log(NEW_USERS)


const USERS_OBJ = USERS.map( item =>(
    {userName: item, shortName: `${item[0]}.`,
    newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
}
)     
)
    console.log(USERS_OBJ) 
