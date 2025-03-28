///////JSON LOCALSTORAGE/////////

let currentUser = JSON.parse(localStorage.getItem("currentUser"))
console.log("The current user is: ", currentUser)


const jsonRetrieval = localStorage.getItem("userlist")
const userlist = JSON.parse(jsonRetrieval)
const jsonFlag = localStorage.getItem("loginTabFlag")
let loginTabFlag = JSON.parse(jsonFlag)
console.log(loginTabFlag)
localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 

const loginNav = (()=>{
  if(loginTabFlag === null){
    loginSignUp()
  }
  else if(loginTabFlag === 1){
    signOut()
  }
})();


/////////LOGIN STUFF/////////////
function inputStuff(){
  const loginInputs = document.querySelectorAll(".login-input")
  let lastInput = null
  const userNameLogin = document.getElementById("username_login")
  const passwordLogin = document.getElementById("password_login")
  for(let input of loginInputs){
    input.addEventListener('focus', function(){
      if(lastInput && lastInput.value === ''){
        lastInput.placeholder = `please input valid ${lastInput.name}`
      }
      lastInput = input
    })
    input.addEventListener('keydown', (event)=>{
      if(event.key === "Enter" ){
          console.log(passwordLogin.value)
          console.log(userNameLogin.value)
          console.log("Poggers")
          let flag = null
          for (x of Object.keys(userlist)){
            let i = 0
            if(userlist[x]["username"] === userNameLogin.value && userlist[x]["password"] === passwordLogin.value){
              localStorage.setItem("currentUser", JSON.stringify(userlist[x]))
              loginTabFlag = 1
              localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 
              location.reload()
            }
            i++
          }
          if(!flag){
            console.log("Please enter correct info")
          }
      }
    })
  }
}
inputStuff()
const tagsContainer = document.querySelector(".tags-list");

/**login sign up function */

function loginSignUp(){

  /*variables */

    const overlay = document.querySelector(".overlay")
    const dropdownItem = document.querySelector(".title-dropdown")
    overlay.classList.add('hide')
    let close = document.querySelector(".close");
    const arrow = document.querySelector(".arrow")

    const moreIcon = document.createElement("div")
    moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon" id="more-login-dropdown"></i>`

    const loginWrapper = document.querySelector(".login")
    const loginTab = document.querySelector(".login-tab");
    const loginBox = document.querySelector(".login") 
    let login = document.createElement("div")

    login.addEventListener("click", ()=>{
      loginTab.classList.toggle("display")
    })
    login.classList.add("login-btn2")
    login.textContent="Login"

    let signUp = document.createElement("div")
    signUp.classList.add("login-btn")
    signUp.textContent="Sign Up"

    const loginDropdown = document.createElement("div")
    loginDropdown.classList.add("login-dropdown")
    loginBox.appendChild(moreIcon)
    loginBox.appendChild(loginDropdown)
    loginDropdown.appendChild(login)
    loginDropdown.appendChild(signUp)
    login

    /*event listeners */
    close.addEventListener('click', ()=>{
      loginTab.classList.toggle("display");
    })
   
    moreIcon.addEventListener("click", ()=>{
      loginDropdown.classList.toggle("display-flex")
    })
    
    arrow.addEventListener("click", ()=>{
      dropdownItem.classList.toggle("display")
    })
  
}

function signOut(){
  const loginBox = document.querySelector(".login")
  const notificationTick = document.createElement("div")
  notificationTick.classList.add("notification-tick")
  const alerts = document.createElement("div")
  alerts.classList.add("span-style")

  const mailIcon = document.createElement("div")
  mailIcon.classList.add("span-style")
  const plusIcon = document.createElement("div")
  const moreIcon = document.createElement("div")

  moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon"></i>`
  plusIcon.classList.add("span-style")

  plusIcon.innerHTML = `<span class="span-style">Add Post</span><i class="ri-add-fill"></i>`
  
  const signOutButton = document.createElement("div")
  signOutButton.classList.add("login-btn")
  signOutButton.classList.add("sign-out")

  signOutButton.textContent = "SignOut"
  plusIcon.style.fontSize = '20px'
  mailIcon.innerHTML = `<span class="span-style">Mail</span><i class="ri-mail-line span-style"></i>`
  mailIcon.style.fontSize = '20px'
  alerts.innerHTML = `<span class="span-style">Alerts</span><i class="ri-notification-4-line"></i>`
  

  signOutButton.addEventListener("click", ()=>{

    loginTabFlag = null

    localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 
    localStorage.setItem("currentUser", JSON.stringify(''))
    location.reload()
  })

  const body = document.body
  /*/////////DROPDOWN//////////*/

  const overlay = document.querySelector(".overlay")


  const dropdown = document.createElement("div")
  dropdown.classList.add("dropdown-box")
  


  /**nav dropdown */

  const dropdownBoxNav = document.querySelector(".nav-dropdown")
  dropdownBoxNav.classList.add("hide")
  const arrow = document.querySelector(".arrow")

  /**user profilepic */
  const userProfilePic = document.createElement("div")
  const userProfileDisplay = document.createElement("div")
  userProfileDisplay.classList.add("current-user-icon-wrapper")
  userProfilePic.classList.add("current-user-icon")
  

  /*dropdown event listeners */


  const dropdownItem = document.querySelector(".title-dropdown")

    arrow.addEventListener("click", ()=>{
      dropdownItem.classList.toggle("display")
      overlay.classList.toggle("display")
      if(dropdown.classList.contains("display")){
        dropdown.classList.remove("display")
      }
    })

  userProfileDisplay.addEventListener("click", ()=>{

    if(overlay.classList.contains("display")&& !dropdown.classList.contains("display")){
      overlay.classList.add("display")
      dropdown.classList.toggle("display")
    } else {
      dropdown.classList.toggle("display")
      overlay.classList.toggle("display")
    }
    
    if(dropdownItem.classList.contains("display")){
      dropdownItem.classList.remove("display")
    }
  })

  overlay.addEventListener("click", ()=>{
    if (dropdownItem.classList.contains("display")){
      dropdownItem.classList.remove("display")
    }
    if (dropdown.classList.contains("display")){
      dropdown.classList.remove("display")
    }
    overlay.classList.remove("display")
  })

  loginBox.appendChild(userProfileDisplay)
  dropdown.appendChild(plusIcon)
  dropdown.appendChild(alerts)
  dropdown.appendChild(mailIcon)
  userProfileDisplay.appendChild(userProfilePic)
  userProfileDisplay.appendChild(moreIcon)
  userProfileDisplay.appendChild(notificationTick)
  loginBox.appendChild(dropdown)
  dropdown.appendChild(signOutButton)
  
}

const images = [
  {
    link:"/art-website/artwork/img2.jpg",
  },
  {
    link:"/art-website/artwork/img1.jpg",
  },
  {
    link:"/art-website/artwork/img3.jpg",
  },
  {
    link:"/art-website/artwork/img4.jpg",
  },
  {
    link:"/art-website/artwork/img5.jpg",
  },
  {
    link:"/art-website/artwork/img6.jpg",
  },
  {
    link:"/art-website/artwork/img7.jpg",
  },
  {
    link:"/art-website/artwork/img8.jpg",
  },
  {
    link:"/art-website/artwork/img9.jpg",
  },
  {
    link:"/art-website/artwork/img10.jpg",
  },
  
  {
    link:"/art-website/artwork/img11.jpg",
  },
  {
    link:"/art-website/artwork/img15.jpg",
  },
  {
    link:"/art-website/artwork/img13.jpg",
  },
  {
    link:"/art-website/artwork/img14.jpg",
  },

  

];

