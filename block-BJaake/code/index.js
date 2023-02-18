// let url = https://api.spaceflightnewsapi.net/v3/articles?_limit=30
let input = document.querySelector("select");
let root = document.querySelector("ul");

// input.addEventListener("keyup" , (event) => {
//     if(event.keyCode = 13 && event.target.value){
//         fetch("")
//     }

// })

// function url(){

// }
fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
.then((val) => val.json()).then(val => creatUi(val));

 function creatUi(data){
     data.forEach((news) => {
         let li = document.createElement("li");
         let img = document.createElement("img");
         img.src = news.imageUrl;
         let article = document.createElement("article");
         let button = document.createElement("button");
         button.innerText = news.newsSite;
         let p = document.createElement("p"); 
         p.innerText = news.title;
         let a = document.createElement("a");
         a.innerText = "Read More"
         a.href = news.url;
         article.append(button,p,a);
         li.append(img,article);
         root.append(li);
     })
 };