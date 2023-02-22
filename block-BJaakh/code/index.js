let input = document.querySelector("input");
let span = document.querySelector("span");
let button = document.querySelector(".button");

let root = document.querySelector("ul");

let allTodo = [];

// UI function 
function creatUi(data){
    root.innerHTML = "";
    console.log(data);
    data.forEach((el,i) => {
    let li =  document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = el.isDone;
    let p = document.createElement("p");
    p.innerText = el.title;
    let span = document.createElement("span");
    span.innerText = "❌"
    li.append(input,p,span);
    root.append(li);
    el.id = i;
    span.addEventListener("click",handleDelete(data))
    // li.addEventListener("dblclick",)

    })
    
};

// footer function

function footerUi(){
    button.innerHTML = "";
    let span = document.createElement("span");
    span.innerText = `${allTodo.length} items left`
    let active = document.createElement("button");
    active.innerText ="Active"
    let completed = document.createElement("button");
    completed.innerText = "Completed";
    let all = document.createElement("button");
    all.innerText = "All";
    let clear = document.createElement("button");
    clear.innerText = "Clear Completed"
    button.append(span,active,completed,clear);
};

// function handleTodo(){
//     let input = document.createElement("input");



// }


function handleDelete(data){
    data.splice(data[],1);
    creatUi(data);
    footerUi();
};

// function handleToggle(){


// }



// event on display function 

input.addEventListener("keyup",(event) => {
    if(event.keyCode === 13 && event.target.value){
        console.log(event.target.value)
        let todo = {title: event.target.value,isDone: false}
        event.target.value = "";
        allTodo.push(todo);
        creatUi(allTodo);
        footerUi();
    }
});





