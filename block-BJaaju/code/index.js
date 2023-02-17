let button = document.querySelector("button");
let img = document.querySelector("img");
console.log(img)

function fetch(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload = () => {
        let imageData = JSON.parse(xhr.response);
        console.log(imageData);
        img.src = imageData.urls.small;
    }
    xhr.send()
}
button.addEventListener("click" , () => {
    console.log("anish")
    fetch("https://api.unsplash.com/photos/random/?client_id=CfbZFZFbicUVbKqEuu2I0MsKrw-ngkvpqHsSnR8uIPk");
})

// CfbZFZFbicUVbKqEuu2I0MsKrw-ngkvpqHsSnR8uIPk
// https://api.unsplash.com/photos/random