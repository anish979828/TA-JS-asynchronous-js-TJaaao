
let root = document.querySelector("ul");

let url = "https://basic-todo-api.vercel.app/api/todo"

// fetch data 

function fetchData(url){
    fetch(url).then(val => val.json())
    .then(val => {
        creatUi(val.todos);
        // footerUi(val.todos)
});
}

fetchData(url);

// UI function 
function creatUi(data){
    root.innerHTML = "";
    data.forEach((el,i) => {
    let li =  document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("data-id",el._id);
    input.checked = el.isCompleted;

    // event on checkbox 
    input.addEventListener("click",(event) => handleToggle(el._id,el.isCompleted))
    let p = document.createElement("p");
    p.innerText = el.title;

    // event for update 
    p.addEventListener("click",(event) =>{
        handleUpdate(event,el._id)
    } )
    let span = document.createElement("span");
    span.innerText = "❌"
    span.setAttribute("data-id",el._id);

    // event for delete 
    
    span.addEventListener("click",() => handleDelete(el._id))
    li.append(input,p,span);
    root.append(li);
    el.id = i;
    })
};

// // footer Ui function
// function footerUi(val){
//     button.innerHTML = "";
//     let span = document.createElement("span");
//     span.innerText = `${val.length} items left`
//     let active = document.createElement("button");
//     active.innerText ="Active"
//     let completed = document.createElement("button");
//     completed.innerText = "Completed";
//     let all = document.createElement("button");
//     all.innerText = "All";
//     let clear = document.createElement("button");
//     clear.innerText = "Clear Completed"
//     button.append(span,active,completed,clear);
// };

// create 

function handleCreate(event){
    let data = {
        todo: {
            title: event.target.value,
            isCompleted: false
        }
    }
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(val => {
        fetchData(url)
        event.target.value = ""
      } );
};

// event for create 

input.addEventListener("keyup",(event) => {
    if(event.keyCode === 13 && event.target.value){
        handleCreate(event);
    }
});

// delete 

function handleDelete(id){
    fetch(url + `/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(val => fetchData(url));

};

// update 

function handleUpdate(e,id){
    let input = document.createElement("input");
    let parent = e.target.parentElement;
    parent.replaceChild(input,e.target);
    input.value = e.target.innerText;
    input.addEventListener("keyup",(event) =>{
        if(event.target.value && event.keyCode == 13){
            let data = {
                todo : {
                    title: event.target.value
                }
            }
            fetch(url + `/${id}`,{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(val => fetchData(url));
        }
    })
};

// update status


function handleToggle(id,status){
    status = !status
    let data = {
        todo: {
            isCompleted: status
        }
    };
    fetch(url +`/${id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => fetchData(url));
}


 








