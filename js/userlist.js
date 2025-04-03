let users = {
    destroyer291: {
        username: "destroyer",
        email: "destroyer34@gmail.com",
        password: "notdestroyer",
        art: [{id: 'img1.jpg', title: "Blaidd", link: "img1.jpg"}, 
            {id: '123456789', title: "Ina", link: "img2.jpg"}, 
            {id: '123435425', title: "Sana", link: "img3.jpg"}, 
            {id: '153495425', title: "Gura", link: "img4.jpg"}, 
            {id: '223433445', title: "Melina", link:"img5.jpg"}, 
            {id: '323335425', title: "Miquella", link: "img6.jpg"}, 
            {id: '663435425', title: "Suko", link: "img7.jpg"}, 
            {id: '623470425', title: "Suko2", link: "img8.jpg"}, 
            {id: '398435425', title: "Fauna", link: "img9.jpg"}, 
            {id: '632225425', title: "Moonlight", link: "img10.jpg"}] 
    },
    honeybuns: {
        username: "honeybuns",
        email: "honeybuns@gmail.com",
        password: '12345',
        art: [{id: '123856789', title: "Ranni with Boba",
            link: "img11.jpg"}, 
            {id: '397536789', title: "Eda the Owl Lady", link: "img12.jpg"}, 
            {id: '226596789', title: "Gura2", link: "img13.jpg"}, 
            {id: '594334689', title: "Skulls", link: "img14.jpg"}, 
            {id: '460536789', title: "Roderika", link: "img15.jpg"}, 
            {id: '823337476', title: "Ranni", link: "img16.jpg"}, 
            {id: '953936779', title: "Melina", link: "img17.jpg"}, 
            {id: '256786789', title: "Ina", link: "img18.jpg"}]
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
        let i = 0;
        for(let y of users[x].art){
           
            obj = {...obj, [y.link]: {user: x, link: y.link, id: y.id, title: y.title}}
            
            i++;
            /*
            obj = {...obj, [x]: {title: y["title"]}}
            */
           
        }
    }
    console.log(obj)
    
    return obj;
}

const artwork= gatherArtwork()

export {users, artwork};