let users = {
    destroyer291: {
        username: "destroyer",
        email: "destroyer34@gmail.com",
        password: "notdestroyer",
        art: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg","img10.jpg",  ]
    },
    honeybuns: {
        username: "honeybuns",
        email: "honeybuns@gmail.com",
        art: ["img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg", "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg", ]
    },
    sonicfan123: {
        username: "sonicfan123",
        email: "sonicfan123@gmail.com",
        password: "scourgefan",
        art: ['']
    },
    gobthegreat: {
        username: "gobthegreat",
        email: "gobthegreat@gmail.com",
        password: "12345",
        art: [''],
    },
}


function gatherArtwork(){
   
    let obj = {};
    for(let x of Object.keys(users)){
        for(let j of Object.keys(users[x].art)){
            // console.log(users[x].art[j])
            obj =  {...obj, [users[x].art[j]] : x}
        }
    }
    
    return obj;
}

const artwork = gatherArtwork()

console.log(artwork["img1.jpg"])


// let usersStringed = JSON.stringify(users)
// localStorage.setItem("userlist", usersStringed)


// function addUser(username, email, password, list){
//     const newUser = new Object
//     newUser.username = username
//     newUser.email = email
//     newUser.password = password
    
//     const newUsers = {...list, [username]: newUser} 
//     console.log(newUsers)
//     return(newUsers)
// }

// users = addUser("magicgirl4", "magicgirl4@gmail.com", "12345", users)
// users = addUser("curseyoubale", "magicgirl4@gmail.com", "12345", users)

export {users, artwork};