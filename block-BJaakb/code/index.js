// - Create a function named `fetch` which can accept one parameter an `url` and returns a promise.
// - Use `XMLHttpRequest` to make a network request using the `url` from parameter
// - When the data is loaded resolve the promise with the value
// - If there is any issue loading data reject the promise with an error message

// Add-on:

// - Refactor the image search app you created (in previous exercise) to use the function `fetch` you crated above.  
let input = document.querySelector("input");
let ul =  document.querySelector("ul");
console.log(ul);

let link = `https://api.unsplash.com/photos/?client_id=Iee0TgMyS_LlNYVhB2mUSKFISIqWhAkfbVXhu5l9e4k`

input.addEventListener("keyup",  (event) => {
    if(event.keyCode == 13 && event.target.value){
        url = `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=Iee0TgMyS_LlNYVhB2mUSKFISIqWhAkfbVXhu5l9e4k`;
        console.log(url)
        fetch(url).then((ur) => ui(ur.results));
        input.value = "";
    }
});


function ui(data){
    ul.innerHTML = "";
    data.forEach((image) => {
    let img = document.createElement("img");
    console.log(data);
    img.src = image.urls.thumb;
    ul.append(img);
    });
    
}

function fetch(url){
    return new Promise((res,rej) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url)
        xhr.onload = () => res(JSON.parse(xhr.response));
        xhr.onerror = () => rej("Something went wrong");
        xhr.send();
    })
};
fetch(link).then(ui);




