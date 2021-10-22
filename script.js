const myTweet = document.getElementById('myTweet');
const tweetsContainer = document.getElementById('tweets-container');
const userName = document.getElementById('userName');
const tweetContent = document.getElementById('tweetContent');
document.getElementById('submitBtn').addEventListener('click',newTweet);
let tweets = [];
let tweet = {};
///////////////////////New Tweeeeet function/////////////////////////////////
function newTweet() {
if(userName.value.length<=250 && tweetContent.value.length<=250) {
    let tweet = {id:tweets.length,userName:userName.value,tweetContent:tweetContent.value};
    createTweet(tweet);
    userName.value = "";
    tweetContent.value ="";
}
else alert('user fields shoule be less than 250 characters');
}
//////////////////////////create Tweeet function ///////////////////////////
function createTweet(tweet){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes(); 
    const myDate = hours + ":" + minutes;

    let newTweet = document.createElement('div');
    newTweet.className = 'myTweet';
    newTweet.innerHTML = `<img id="myim" src="./images/avatar.jpg" alt="user">
    <div class="disc">
        <div class="name"><h3>${tweet.userName} <h3> <h5 class="date"> ${myDate}</h5></div>
        <p>${tweet.tweetContent}</p><br>
        <div class="tweet_icon">
            <i class="fas fa-heart , icon" id="${tweets.length}" onclick="like(${tweets.length})"></i>
            <i class="fas fa-retweet , icon" onclick="reTweet(${tweets.length})"></i>
        </div>
    </div>`;
    tweets.push(tweet);
    tweetsContainer.insertBefore(newTweet,tweetsContainer.firstChild);
}
///////////////////////////like function ///////////////////////////////////
function like (index){
    
    let my = document.getElementById(index);
    my.classList.toggle('likes');
    my.parentElement.parentElement.parentElement.classList.toggle('like');
}
///////////////////////////ReeTweeet function///////////////////////////////
function reTweet(index){
    let tweet = tweets[index];
    createTweet(tweet);
    }