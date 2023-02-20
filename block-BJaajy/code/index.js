// - Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with it.

// let first = Promise.resolve("Hey");
// let second = Promise.resolve("Anish!");
// let third = Promise.resolve("How are u?");
// let fourth = Promise.resolve("All good!");

// Promise.all([first,second,third,fourth]).then(val => val.forEach(val => console.log(val)));

let time = [1,2,3,4];
time.map(second => {
    new Promise((res,rej) => {
        setTimeout(() => res())
    })
})

// - Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.
let username = ["anish979828","aditya2z","prank7","ritesh22201"];

Promise.all(username).then(val => {
    val.forEach(user => {
        fetch(`https://api.github.com/users/${user}`).then(val => val.json()).then(val => console.log(val.followers))
    })
});

// - Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

//   - https://random.dog/woof.json
//   - https://aws.random.cat/meow

let promise1 = Promise.resolve("")

Promise.race([])

// - Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

// ```js
// const one = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('Arya'), 1000)
// );
// const two = new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error('Whoops!')), 2000)
// );
// const three = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('John'), 3000)
// );
// ```

// - What will be the output of the following code snippet? How much time will it take for the promise to resolve?

// ```js
// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Arya'), 1000);
//   }),
//   'Sam',
//   { name: 'John' },
// ]).then(console.log);