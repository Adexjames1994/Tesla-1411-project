// let diff = a -x ;
// let sum = a + x;
// let mul = a * x;
// let div = a / x;
// let mod = a % x;


let a = 10;
let x = 5;
// console.log(a > x);
// console.log(a < x);
console.log(a == x);

let adultAge = 18;

// if (adultAge >= 16) {
//   // code
//   console.log('You are an adult');
// } else {
//   console.log('sorry You are not an adult');
// }

if (adultAge % 2 === 0) {
  console.log('adultAge is even');
  
} else {
  console.log('adultAge is odd');
}

let score = 75;

if (score >= 90) {
  console.log('Grade:A');
} else if (score >= 80) {
  console.log('Grade:B');
} else if (score >= 70) {
  console.log('Grade:C');
} else if (score >= 60) {
  console.log('Grade:D');
} else {
  console.log('Grade:F');
}


let username = 'admin';
let password = 'password123';

if (username === 'admin')
  if (password === 'password123') {
    console.log('Welcome Admin');
  } else {
    console.log('Invalid Password');
  } else {
    console.log('Invalid Username');
  }


  let temperature = 33;
  let isSunny = true;

  if (temperature > 30 && isSunny){
    console.log('It is a hot day');
  } else if (temperature > 30 && !isSunny) {
    console.log('It is a cloudy day');
  } else{
    console.log('the weather is cool');
  }


  // for loop has 3 expressions
  // 1. initialization
  // 2. condition
  // 3. increment or decrement

  // for(let i = 0; i<=5; i++){
  //   console.log("Number: " + i)

  // }
  let names = ["sam", "max", "john", "dan"];

  for(let i = 0; i < names.length; i++){
    console.log(names[i]);
  }

  let person = {personName: "John", age: 25, country: "USA"};
  for(let key in person){
    console.log(key + ": " + person[key]);
  }

  //y loop
  let count = 0;

  while(count < 10){
    console.log("number: " +count);
    count++;
  }


  function greet(name) {
    console.log('Hello ' + name);
  }
  greet("Adeola");

  // types of functions
  // 1. function declaration
  // 2. function expression
  // 3. arrow function
  // 4. IIFE


  function addNumbers(a, b){
    return a + b;
  }
  let result = addNumbers(10, 20);
  console.log(result);



