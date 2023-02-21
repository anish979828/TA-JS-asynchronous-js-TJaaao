// You will find the collection of GOT books (https://www.anapioficeandfire.com/api/books)
let root = document.querySelector("ul");
// let button = document.querySelector("button");
// let span = document.querySelector("span");

// button.addEventListener("click",() => {
//     root.style.display = "none";
// });


// fething data 
function fethApi(url){
    load(true);
    fetch("https://www.anapioficeandfire.com/api/books")
    .then(val => val.json())
    .then(val => { 
        load();
        createUi(val);
    })
}
fethApi();

// loading icon 
function load(status = false){
    if(status){
        root.innerHTML = `<div class="spinner"><div class="donut"></div></div>`
    }
    
}

// creating UI 
function createUi(data){
    root.innerHTML = "";
    root.innerHTML = data.map(ele => {
        return `<li>
        <h2>${ele.name}</h2>
        <p>${ele.authors}</p>
        <button>show characters (${ele.characters.length})</button>
    </li>`
    }).join("");
};



// - The data will contain `name`, `authors`, `numberOfPages`, `publisher`, `released` and `country`
// - Display above information about each book in a collection books
// - Each book will also contain key named `characters` which will contain list of links to find the information about all the characters.
// - Each book will have a button saying `Show Characters (24)` 24 is the number of characters in the book
// - When you click on the button `Show Characters (24)` it will open a popup with information about all the characters.
// - Each character being displayed in the popup will display `name`, `gender`, `aliases` and `tvSeries` they are a part of.
// - The popup will also have a cross icon. Once clicked it will close the popup.
// - Handle error and show loading indicator when ever data is fetched.



