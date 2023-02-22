// You will find the collection of GOT books (https://www.anapioficeandfire.com/api/books)
let root = document.querySelector("ul");
let article = document.querySelector("article");
let span = document.querySelector("span");
let section = document.querySelector("section");

span.addEventListener("click", () => {
    root.classList.toggle("show");
    section.style.display = "none";
})

// fething data 
function fethApi(url){
    load(root,true);
    fetch(url)
    .then(val => val.json())
    .then(val => { 
        createUi(val);
    }).finally(() => {
        load(root);
    })
}
fethApi("https://www.anapioficeandfire.com/api/books");

// loading icon 
function load(rootElm,status = false){
    if(status){
        rootElm.innerHTML = `<div class="spinner"><div class="donut"></div></div>`
    }
    
}

// creating UI 
function createUi(data){
    root.innerHTML = "";
    data.forEach(el => {
        let li = document.createElement("li");
        console.log(data)
        let h2 = document.createElement("h2");
        let  p = document.createElement("p");
        let button = document.createElement("button");
        h2.innerText = el.name;
        p.innerText = el.authors;
        button.innerText = `Show character (${el.characters.length})`;
        li.append(h2,p,button);
        root.append(li);

        // event on button 
        button.addEventListener("click",() => {
            root.classList.toggle("show");
            section.style.display = "block";
            characterUi(el.characters)
       });
    })
};

// UI for characters
function characterUi(data){
    Promise.all(data.map(el => {
        load(article,true)
        return fetch(el).then(val => val.json())
    })).then(el => {
        article.innerHTML = "";
        el.forEach(el => {
            let div = document.createElement("div");
            div.classList.add("box")
            div.innerText = `${el.name} : (${el.aliases})`
            article.append(div);
        }).catch((err) => {
            article.innerText = err;
        }).finally(() => {
            load(article);
        })

    })

    
}


// - The data will contain `name`, `authors`, `numberOfPages`, `publisher`, `released` and `country`
// - Display above information about each book in a collection books
// - Each book will also contain key named `characters` which will contain list of links to find the information about all the characters.
// - Each book will have a button saying `Show Characters (24)` 24 is the number of characters in the book
// - When you click on the button `Show Characters (24)` it will open a popup with information about all the characters.
// - Each character being displayed in the popup will display `name`, `gender`, `aliases` and `tvSeries` they are a part of.
// - The popup will also have a cross icon. Once clicked it will close the popup.
// - Handle error and show loading indicator when ever data is fetched.



