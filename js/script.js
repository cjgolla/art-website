

//////////// SWIPER ////////////
const imageSwiper = new Swiper('.wrapper', {

    loop: true,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      },
      1076: {
        slidesPerView: 4
      },
      1234: {
        slidesPerView: 4
      },
      2076: {
        slidesPerView: 4
      },
      2406: {
        slidesPerView: 6
      },
      
    }


  });

  const tagSwiper = new Swiper('.tags-swiper', {

    loop: true,
    spaceBetween: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      450: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6
      },
      1664: {
        slidesPerView: 12
      },
      3000: {
        slidesPerView: 12
      },
      
    }


  });


const images = [
    {
      link:"/artwork/img2.jpg",
    },
    {
      link:"/artwork/img2.png",
    },
    {
      link:"/artwork/img7.jpg",
    },
    {
      link:"/artwork/img8.jpeg",
    },
    {
      link:"/artwork/img10.jpg",
    },
    {
      link:"/artwork/img11.jpg",
    },
    {
      link:"/artwork/img12.jpg",
    },
    {
      link:"/artwork/img13.jpg",
    },
    {
      link:"/artwork/img14.jpg",
    },
    {
      link:"/artwork/img15.jpg",
    },
    
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img21.jpg",
    },
    {
      link:"/artwork/img22.jpg",
    },
    {
      link:"/artwork/img23.jpg",
    },
    {
      link:"/artwork/ismail-inceoglu-the-boy-who-cried-wolf.jpg",
    },
    {
      link:"/artwork/lane-brown-dunedrifter-v2.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    

  ];

const grid = document.querySelector(".grid");

const tagList = [
  {
    name:"Anime"
  },
  {
    name:"Concept Art"
  },
  {
    name:"Portraits"
  },
  {
    name:"Cartoon"
  },
  {
    name:"Fan Art"
  },
  {
    name:"PENIS"
  },
  {
    name:"Landscape"
  },
  {
    name:"Abstract"
  },
  {
    name:"Sketch"
  },
  {
    name:"Anime"
  },
  {
    name:"Concept Art"
  },
  {
    name:"Portraits"
  },
  {
    name:"Cartoon"
  },
  {
    name:"Fan Art"
  },
  {
    name:"PENIS"
  },
  {
    name:"Landscape"
  },
  {
    name:"Abstract"
  },
  {
    name:"Sketch"
  },

]



tagList.forEach((tag) =>{
  tag.innerHTML += `<div class="tag swiper-slide" style="width:50px;"><span class="tag-dec">${tag.name}</span></div>`
})

const tags = document.querySelectorAll(".tag");

tags.forEach((item) => {
  item.addEventListener('click', ()=>{
    item.classList.toggle("tag-toggle")
    tags.forEach((btn)=>{
      if(btn.classList.contains("tag-toggle") && !(btn===item)){
        btn.classList.toggle("tag-toggle");
      }
    })
    console.log("clicked")
  })
})



images.forEach((img) =>{
  grid.innerHTML += `<a href="#"><div style="background-image: url(${img.link})" class="grid-item"></div></a>`
});

///// LOGIN BOX /////