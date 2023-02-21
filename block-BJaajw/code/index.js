let input = document.querySelector("select");
let root = document.querySelector("ul");
let allNews;

function load(status = false){
    if(status){
        root.innerHTML = '<div class="spinner"><div class="donut"></div></div>'
    }
};

// fething data 


function fetching(){
    load(true);
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=80")
.then((val) => {
    if(val.ok){
        return val.json()
    }else{
        throw new Error(`error${val.status} is happened`);
    };
    return val.json();
}).then(val => {
    load()
    // if(Array.isArray(val)){
    //     allNews = val;
    //     showOption(allNews);
    //     creatUi(val);
    // }
       allNews  = val;
       showOption(allNews);
       creatUi(val);

}).catch(val => {
    root.innerText = "check your internet conection❌";
});
    
}
fetching();


// Ui function 
function creatUi(data){
    root.innerHTML ="";
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

// showing option in select 
function showOption(allNews) {
    let options = Array.from(new Set(allNews.map(img => img.newsSite)));
    options.forEach(Option => {
        let option = document.createElement("option");
        option.innerText = Option;
        input.append(option);
    })
};

// event on option 

input.addEventListener("change", (event) => {
    if(event.target.value){
        let filterData = allNews.filter(news => news.newsSite === event.target.value);
        creatUi(filterData);
    }else{
        creatUi(allNews);
    }
});