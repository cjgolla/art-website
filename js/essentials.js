///////JSON LOCALSTORAGE/////////
import {signUp} from "/art-website/js/loginSignUp.js";


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
  signUp()

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

