// ES6 Features
// 1. Template literals
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);
// 2. Object Destructuring
const person = { name: "Alice", age: 25 };
const { name1, age } = person;
console.log(name1, age);

// Scope
// 1. Global Scope
const globalVar = "I'm global";

function printGlobal() {
  console.log(globalVar);
}
printGlobal();

// 2. Local Scope
function printLocal() {
  const localVar = "I'm local";
  console.log(localVar);
}

printLocal();

// 3. Let
//Let allows variables to be reuse
let x = 10;

if (true) {
  let x = 20;
  console.log(x);
  // Result: 20
}
console.log(x);

// 4 Const
// Assigning a variable to be constants means it is immutable i.e it cannot be changed
const PI = 3.14;
console.log(PI);
// Uncommenting the next line will result in an error because you can't reassign a constant.
// PI = 3.14159;

// 5 Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 7));

// 6 Arrays
displayResult("Array Functions");
// 6.1. Map
displayResult("Map");
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
displayResult(doubled);
// 6.2. Filter
displayResult("Filter");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
displayResult(evenNumbers);
// 6.3. Reduce
displayResult("Reduce");
const sum = numbers.reduce((acc, num) => acc + num, 0);
displayResult(sum);
// 6.4. ForEach
displayResult("ForEach");
numbers.forEach((num) => displayResult(num));

// 7 Objects
displayResult("Objects");
const personOjects = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(personOjects.firstName);
// Adding a new property
personOjects.city = "New York";
displayResult(personOjects);

function displayResult(result) {
  const outputContainer = document.getElementById("div-container");
  const resultElement = document.createElement("p");
  resultElement.textContent = JSON.stringify(result);
  outputContainer.appendChild(resultElement);
}
