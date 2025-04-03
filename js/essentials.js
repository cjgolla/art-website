///////JSON LOCALSTORAGE/////////



window.onload = function(){
  if (localStorage.getItem('loginTablFlag')===null) {
    localStorage.setItem('loginTabFlag', null)
  }
  
  const navBar = document.querySelector(".nav");
  fetch('/art-website/html/navbar.html')
    .then(response => response.text())
    .then(data => {
      navBar.innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar', error));
  
  const loginSignUpTab = document.querySelector(".login-tab");
  fetch('/art-website/html/login-signup.html')
    .then(response => response.text())
    .then(data =>{
      loginSignUpTab.innerHTML = data;


      
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




function signUp(){
  const redText = document.querySelector(".redtext")
  const username = document.getElementById('signup-username');
  const email = document.getElementById('signup-email');
  const password = document.getElementById('signup-password');
  const reEnterPassword = document.getElementById('signup-reenter-password');

  for(x of Object.keys(userlist)){
    let i = 0;
    if(userlist[x]['username'] === username.value || userlist[x]['password'] === password.value){
      redText.style.display = "block";
      return;
    }
    else if(username.value === '' || password.value === ''){
      redText.textContent = "fill in all boxes"
      redText.classList.remove("hide")
      console.log("redtext")
      return;
    }
    else if(!validateEmail(email.value)){
      redText.textContent = "type in valid email"
      redText.classList.remove("hide")
    }

  }
    
}

function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function inputStuff(){
  const loginBtn = document.getElementById("login-submit-btn");
  const signUpBtn = document.getElementById("signup-submit-btn")
  const loginInputs = document.querySelectorAll(".login-input")
  let lastInput = null

  for(let input of loginInputs){
    input.addEventListener('focus', function(){
      if(lastInput && lastInput.value === ''){
        lastInput.placeholder = `please input valid ${lastInput.name}`
      }
      lastInput = input
    })
    
    input.addEventListener('keydown', (event)=>{
      if(event.key === "Enter" ){
           submitInfo()
      }
    })  
  }

  loginBtn.addEventListener('click', ()=>{
      submitInfo()

  })

  signUpBtn.addEventListener('click', ()=>{
    signUp();
  })
  
}

function submitInfo(){
  const redText = document.querySelector('.redtext')
    redText.classList.remove("hide")
    redText.textContent = "test to see if buttons work correct info"


  const userNameLogin = document.getElementById("username_login")
  const passwordLogin = document.getElementById("password_login")
  
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
    redText.classList.remove("hide")
    redText.textContent = "enter correct info"
  }
   
}


inputStuff()
const tagsContainer = document.querySelector(".tags-list");

/**login sign up function */

function loginSignUp(){

  /*variables */
    
    const redText = document.querySelector('.redtext')
    const loginBtn = document.getElementById("login-submit-btn");
    const signUpBtn = document.getElementById("signup-submit-btn");

    const overlay = document.querySelector(".overlay")
    const dropdownItem = document.querySelector(".title-dropdown")
    overlay.classList.add('hide')
    const closeLogin = document.getElementById("close-login");
    const closeSignup = document.getElementById("close-signup");

    const arrow = document.querySelector(".arrow")

    const loginInput  = document.querySelectorAll('.login-input')
    console.log(loginInput)
    const signUpInput = document.querySelectorAll(".signup")
    console.log(signUpInput)
    const loginText = document.querySelector(".login-text");


    const moreIcon = document.createElement("div")
    moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon" id="more-login-dropdown"></i>`

    const loginTab = document.querySelector(".login-tab");
    const loginBox = document.querySelector(".login") 
    let login = document.createElement("div")

    


    let signUp = document.createElement("div")
    signUp.classList.add("login-btn")
    signUp.textContent="Sign Up"

    const loginDropdown = document.createElement("div")
    loginDropdown.classList.add("login-dropdown")
    loginBox.appendChild(moreIcon)
    loginBox.appendChild(loginDropdown)
    loginDropdown.appendChild(login)
    loginDropdown.appendChild(signUp)

    /*event listeners */
    login.addEventListener("click", ()=>{
          closeLogin.classList.toggle("hide");
          loginTab.classList.toggle("hide");
          loginInput.forEach((x)=>{
            x.classList.toggle("hide")
          })
          loginText.textContent = "Login";
          loginBtn.classList.toggle('hide')
    })
    login.classList.add("login-btn2")
    login.textContent="Login"

    signUp.addEventListener('click', ()=>{
      closeSignup.classList.toggle("hide")
      loginTab.classList.toggle("hide")
      signUpInput.forEach((x)=>{
        x.classList.toggle('hide')
      })
      loginText.textContent = "Sign Up";
      signUpBtn.classList.toggle('hide');
    })

    closeLogin.addEventListener('click', ()=>{
      redText.classList.add("hide")
      loginTab.classList.toggle("hide");
      loginInput.forEach((x)=>{
        x.classList.toggle("hide")
      })
      closeLogin.classList.toggle('hide')
      loginBtn.classList.toggle('hide')
    })
  
    closeSignup.addEventListener('click', ()=>{
      redText.classList.add("hide")
      closeSignup.classList.toggle('hide')
      console.log("clicked")
      loginTab.classList.toggle("hide");
      signUpInput.forEach((x)=>{
        x.classList.toggle("hide")
      })
      signUpBtn.classList.toggle('hide')
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

  //////////// NAVBAR ///////////

  const navTitle = document.querySelector(".title")
  navTitle.addEventListener("click", ()=>{
    
  })


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
})
.catch(error => console.error(`Error loading login`, error))
};

const images = [
  {
    link:"artwork/img2.jpg",
  },
  {
    link:"artwork/img1.jpg",
  },
  {
    link:"artwork/img3.jpg",
  },
  {
    link:"artwork/img4.jpg",
  },
  {
    link:"artwork/img5.jpg",
  },
  {
    link:"artwork/img6.jpg",
  },
  {
    link:"artwork/img7.jpg",
  },
  {
    link:"artwork/img8.jpg",
  },
  {
    link:"artwork/img9.jpg",
  },
  {
    link:"artwork/img10.jpg",
  },
  
  {
    link:"artwork/img11.jpg",
  },
  {
    link:"artwork/img15.jpg",
  },
  {
    link:"artwork/img13.jpg",
  },
  {
    link:"artwork/img14.jpg",
  },

];

