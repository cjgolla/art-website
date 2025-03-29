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

let users2 = {
    destroyer291: {
        username: "destroyer",
        email: "destroyer34@gmail.com",
        password: "notdestroyer",
        art: [{title: "Blaidd", link: "img1.jpg"}, {title: "Ina", link: "img2.jpg"}, {title: "Sana", link: "img3.jpg"}, {title: "Gura", link: "img4.jpg"}, {title: "Melina", link:"img5.jpg"}, 
            {title: "Miquella", link: "img6.jpg"}, {title: "Suko", link: "img7.jpg"}, {title: "Suko2", link: "img8.jpg"}, {title: "Fauna", link: "img9.jpg"}, {title: "Moonlight", link: "img10.jpg"}] 
    },
    honeybuns: {
        username: "honeybuns",
        email: "honeybuns@gmail.com",
        art: [{title: "Ranni with Boba", link: "img11.jpg"}, {title: "Eda the Owl Lady", link: "img12.jpg"}, {title: "Gura", link: "img13.jpg"}, {title: "Skulls", link: "img14.jpg"}, {title: "Roderika", link: "img15.jpg"}, 
            {title: "Ranni", link: "img16.jpg"}, {title: "Melina", link: "img17.jpg"}, {title: "Ina", link: "img18.jpg"}]
    },
    sonicfan123: {
        username: "sonicfan123",
        email: "sonicfan123@gmail.com",
        password: "scourgefan",
        art: ''
    },
    gobthegreat: {
        username: "gobthegreat",
        email: "gobthegreat@gmail.com",
        password: "12345",
        art: '',
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

function gatherArtwork2(){
   
    let obj = {};
    for(let x of Object.keys(users2)){
        let i = 0;
        for(let y of users2[x].art){

            obj = {...obj, [y.title]: {user: x, link: y.link}}
            i++;
            /*
            obj = {...obj, [x]: {title: y["title"]}}
            */
           
        }
    }
    
    return obj;
    
    
}

const artwork = gatherArtwork()

const artwork2 = gatherArtwork2()

console.log(artwork2)


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

export {users, artwork, artwork2};