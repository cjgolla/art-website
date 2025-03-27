function Artwork(title, description, imageUrl, artistname, profilePic) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.artistname = artistname;
    this.profilepic = profilePic;
}

function Comment(name, comment, profilePic) {
    this.name = name;
    this.comment = comment;
    this.profilePic = profilePic;
}


Comment.prototype.addComment = function() {
    const commentBox = document.querySelector(".comment-display-wrapper");

    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container")

    const commentFlex = document.createElement("div");
    commentFlex.classList.add("comment");
    commentFlex.classList.add("flex");

    const profilePic = document.createElement("div");
    profilePic.classList.add("profile-pic");
    profilePic.style.background = `url(${this.profilePic})`
    profilePic.style.backgroundSize = "cover";
    profilePic.style.backgroundPosition = "center";

    const commentTextWrapper = document.createElement("div");
    commentTextWrapper.classList.add("comment-text-wrapper");

    const commentText = document.createElement("div");
    commentText.classList.add("comment-text")

    const userName = document.createElement("span");
    userName.classList.add("user-name");
    userName.innerText = this.name;

    const text = document.createElement("span");
    text.innerText = this.comment;

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("like");

    const thumbsUpIcon = document.createElement("i");
    thumbsUpIcon.classList.add("ri-thumb-up-fill");
    

    const replyIcon = document.createElement("span");
    replyIcon.classList.add("reply");
    replyIcon.innerText = "reply";


    commentBox.appendChild(commentContainer);
    commentContainer.appendChild(commentFlex)
    commentFlex.appendChild(profilePic);
    commentFlex.appendChild(commentTextWrapper);
    commentTextWrapper.appendChild(commentText);
    commentText.appendChild(userName);
    commentText.appendChild(text);
    commentContainer.appendChild(likeContainer);
    likeContainer.appendChild(thumbsUpIcon);
    likeContainer.appendChild(replyIcon);

}
Artwork.prototype.display = function() {
    const artworkDiv = document.getElementById("artwork");
    const imgElement = document.querySelector(".main-art-img");
    const titleElement = document.querySelector(".main-art-title");
    const descriptionElement = document.querySelector(".art-description");
    const artistName = document.querySelector(".name");
    const profilePic = document.querySelector(".main-art-profile-pic");

    imgElement.src = this.imageUrl;
    titleElement.textContent = this.title;
    descriptionElement.textContent = this.description;
    artistName.textContent  = this.artistname;
    profilePic.style.background = `url('${this.profilepic}')`; 
    profilePic.style.backgroundSize = "cover";
    profilePic.style.backgroundPosition = "center";

}

const commentList = [
    "This was a good work of Art!", "I met them in real life!", "Gorgeous", "The work of the devil!"
]

const nameList = [
    "billy", "randall", "fillip", "philly", "dave", "tyrone1997"
]

const profilePicList = [
    "/profile-pics/img1.jpg", "/profile-pics/img2.jpg", "/profile-pics/img3.jpg", "/profile-pics/img4.jpg", "/profile-pics/img5.jpg",
    "/profile-pics/img5.jpg", "/profile-pics/img8.jpg", "/profile-pics/img9.png", "/profile-pics/img10.jpg", "/profile-pics/img6.jpg",
    "/profile-pics/img11.jpg", "/profile-pics/img12.jpg", "/profile-pics/img13.png", "/profile-pics/img14.jpg", "/profile-pics/img15.jpg",
    "/profile-pics/img16.jpg", "/profile-pics/img18.jpeg", "/profile-pics/img19.png", "/profile-pics/img20.png", "/profile-pics/img16.jpg",
    "/profile-pics/img21.jpg", "/profile-pics/img22.jpg", "/profile-pics/img23.png", "/profile-pics/img24.jpg", "/profile-pics/img25.jpg",
    "/profile-pics/img26.jpg", "/profile-pics/img28.jfif", "/profile-pics/img29.jfif", "/profile-pics/img20.jpg", "/profile-pics/img27.png",
]
function createComments(commentArrayList, nameArrayList, profilePicList, numOfComments){
    
    let randNum3 = Math.random()*numOfComments;
    console.log(commentArrayList);
    for(let i = 0; i <= numOfComments; i++){
        
        const randNum1 = Math.floor(Math.random()*(commentArrayList.length));
        const randNum2 = Math.floor(Math.random()*(nameArrayList.length));
        const randNum3 = Math.floor(Math.random()*(profilePicList.length));
        const comment = new Comment(nameArrayList[randNum2], commentArrayList[randNum1], profilePicList[randNum3]);
        comment.addComment();
    }
}


createComments(commentList, nameList,profilePicList, 4);

// const comment1 = new Comment("Dave", "good work!");
// const comment2 = new Comment("Michael", "This is exquisite!");
// comment2.addComment();
// comment1.addComment();


const artwork1 = new Artwork("Evil woman burns house", "there may be something wrong with this woman","/artwork/img2.jpg", "coolartist", "/profile-pics/img11.jpg");
const artwork2 = new Artwork("Goddess", "she's baller af","/artwork/img6.png", "artperson444", "/profile-pics/img21.jpg");
const artwork3 = new Artwork("Little Girl Giant Mouse", "We should probably watch our step","/artwork/img11.jpg", "theartist101", "/profile-pics/img25.jpg");


const artworkList = [artwork1, artwork2, artwork3]

function displayMainArt(arr){
    let randNum = Math.floor(Math.random()*(arr.length));
    arr[randNum].display()
}






const mainImage = document.querySelector(".main-art-img");
const mainImageEnlarge = document.querySelector(".img-enlarge-container");
const imageEnlargeClose = document.getElementById("img-enlarge-close");



mainImage.addEventListener('click', ()=>{
    mainImageEnlarge.classList.toggle("display");
})

imageEnlargeClose.addEventListener('click', ()=>{
    mainImageEnlarge.classList.toggle("display");
})