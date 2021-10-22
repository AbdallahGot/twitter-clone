const shareBtn = document.getElementById('submitBtn');
shareBtn.addEventListener('click',newTweet);
const myTweet = document.getElementById('myTweet');
const tweetsContainer = document.getElementById('tweets-container');
const userName = document.getElementById('userName');
const tweetContent = document.getElementById('tweetContent');

let tweets = [];
let tweet = {};
let arr =[];
function newTweet() {


const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes(); 
const myDate = hours + ":" + minutes;
console.log (myDate);


let newTweet = document.createElement('div');
newTweet.className = 'myTweet';
newTweet.innerHTML = `<img id="myim" src="./images/avatar.jpg" alt="user">
<div class="disc">
    <div class="name"><h3>${userName.value} <h3> <h5 class="date"> ${myDate}</h5></div>
    <p>${tweetContent.value}</p>
    <div class="tweet_icon">
        <i class="fas fa-heart , likeBtn" id="${tweets.length}" style="color: rgb(100, 100, 100);"></i>
        <i class="fas fa-retweet" style="color: rgb(100, 100, 100);"></i>
    </div>
</div>`;
let tweet = {id:tweets.length,userName:userName.value,tweetContent:tweetContent.value};
tweets.push(tweet);
tweetsContainer.appendChild(newTweet);
console.log(tweets);
arr = document.getElementsByClassName('likeBtn');

}

for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', cart(i)); 
 }
function cart(){
    let is = i.target.id;
    console.log(is);
}


// arr.forEach((e)=>{
//     e.addEventListener(click,cilii)
// })
// function cilii(){
// for(let i =0 ; i<arr.length;i++){
//     let ts = arr[i].id;
//     tweets.forEach(e =>{
//         if (e.id == ts) {
//             document.getElementById('ts').parentElement.parentElement.parentElement.style.backgroundColor="blue";
//             console.log(ts);
//         }
//         })
// }}