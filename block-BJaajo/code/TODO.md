Create the execution context diagram of the following code. Also write the output of the code below. Keep in mind to have call stack, web browser API and event loop in the diagram. After creating the execution context diagram add the image to the `img` folder.

1.

```js
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');

// "First"
// "Third"
// "Second"

```

2.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 2000); // execute this code after 2000 ms
setTimeout(() => console.log('Third'), 0); // execute this code after 1000 ms
console.log('Third');
// "First"
// "Third"
// "Third"
// "Second"
```

3.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');
// "First"
// "Fourth"
// "Third"
// "Second"
```

4.

```js
console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log('Third'), 0);
console.log('Fourth');

// "First"
// "Fourth"
// "Third"
// "Second"
```

5. What will be the output of the code below and why? Also write the timing of the output starting with 0 ms.

```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
console.log('First');
setTimeout(function exec() {
  console.log('Second');
}, 0);
runWhileLoopForNSeconds(3);
console.log('Third');

// "First" // 0ms
// "Third" // 3000ms
// "Second" // 3001ms

```

6. Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print `one`, `three` and `two`. You are not allowed to move the code up and down.

```js

// setTimeout(() => console.log('one'),1000);

// setTimeout(() => console.log('two'),2000);
 
// setTimeout(() => console.log('three'),3000);
```

7. Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print `one`, `three` and `two`. You are not allowed to move the code up and down.

```js
console.log('one');
console.log('two');
console.log('three');
```

8. Wri1te a function named `asyncForEach` that is similar to `forEach`. But `asyncForEach` is asynchronous in nature rather than synchronous.

```js
funciton asyncForEach(arr,cb){
  arr.forEach((el) => {
    setTimeout(cb[el],0)
  })

}
//  Output of the function below should be
// one
// three
//  1, 2, 3

console.log('one');
asyncForEach([1, 2, 3], (num) => console.log(num));
console.log('three');
```

9. Convert the following function into asynchronous. The output of the function will be

<!-- First Call -->
<!-- 1, 2, 3, 4, 5 -->
<!-- Last Call -->

Convert the code below in such way that the output should be the one below

<!-- First Call -->
<!-- Last Call -->
<!-- 1, 2, 3, 4, 5 -->

```js
console.log('First Call');
[1, 2, 3, 4, 5].forEach((num) => console.log(num));
console.log('Last Call');

function sayHello() {
  console.log('Hey You Called Me');
}
setTimeout(sayHello, 1000);

console.log('Hey You!');
// Hey You!
// Hey You Called Me


2.

function sayHello() {
  console.log('Hey You Called Me');
}

setTimeout(sayHello, 0);

console.log('Hey You!');
// Hey You!
// Hey You Called Me
3.

function main() {
  console.log('A');
  setTimeout(function display() {
    console.log('B');
  }, 0);
  console.log('C');
}
main();
4.

function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log('A');
  setTimeout(function exec() {
    console.log('B');
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log('C');
}
// output

Look at the output of the code below to understand how code is executing
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log('A', Date.now() - current);
  setTimeout(function exec() {
    console.log('B', Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log('C', Date.now() - current);
}

main();
```
