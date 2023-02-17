let user =  document.querySelector(".userimg");
let h2 = document.querySelector("h2");
let span = document.querySelector("span");
let followers = document.querySelector(".followers ul");
let following = document.querySelector(".following ul");
let input = document.querySelector("input");



// fething of url
function fetch(url,uiFunction,root){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload = () => uiFunction(JSON.parse(xhr.response),root);
    xhr.onerror = function(){
        console.log("something went wrong");
    };
    input.value = "";
    xhr.send();
}

// event on input 
input.addEventListener("keyup",(event)=> {
    if(event.keyCode === 13 && input.value){
        let url = 'https://api.github.com/users/' + input.value;
        fetch(url,createUi);
    }
});

// UI creation 
function createUi(data){
    user.src = data.avatar_url;
    h2.innerText = data.name;
    span.innerText = `@${data.login}`;
    fetch(data.followers_url,picture,followers);
    fetch(data.following_url.replace("{/other_user}",""),picture,following);
};

// uifollower 
function picture(data,root){
    root.innerHTML = "";
    console.log(data.following_url);
    for(let i = 0; i < 5; i++){
        let li = document.createElement("li");
        let img = document.createElement("img");
        let a = document.createElement("a");
        a.innerText = `@${data[i].login}`;
        a.href = data[i].html_url;
        a.target = "_blank";
        img.src = data[i].avatar_url;
        li.append(img,a);
        root.append(li);
    }
};

// cats 

let catImg = document.querySelector(".cats img");
let catButton = document.querySelector(".cats button");

catButton.addEventListener("click",() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1&size=full",(data) => {
        catImg.src = data[0].url;
    } )
})

