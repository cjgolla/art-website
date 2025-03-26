const user = {
    username: "destroyer",
    email: "destroyer34@gmail.com",
    password: "notdestroyer"
}

const users = {
    user1: {
        username: "destroyer",
        email: "destroyer34@gmail.com",
        password: "notdestroyer",
    },
}

function addUser(username, email, password, list){
    const newUser = new Object
    newUser.username = username
    newUser.email = email
    newUser.password = password
    
    const newUsers = {...list, [username]: newUser} 
    console.log(newUsers)
    return(newUsers)
}

const list2 = addUser("Honeybuns", "honeybuns@gmail.com", "12345", users)