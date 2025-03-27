let teenAge = 18;

if (teenAge <=17) {
  console.log('you are a teenager');
  
}
else {
  console.log('sorry you are an adult');
}

let username = 'adexj';
let password = 'success210'

if (username === 'adexj' && password === 'success210') {
  console.log('welcome adeola')
  
} else{
  console.log('invaild user')
}

let age = 18

if (age >=18) {
  console.log('You can book ticket')
  
} else{
  console.log('You must be up to 18 before you can book a ticket')
}

let number = 12

if (number % 2 ===0) {
  console.log(number + " is an even number")
  
} else{

console.log(number + ' is an odd number')}

let femi = 35;
if (femi >=35) {
  console.log('femi is a boy')
} else{
  console.log('who are you')
}

let score = 60
if (score >=80) {
  console.log('grade A')
} else if(score >=70){
  console.log('Grade B')
} else if(score >=60){
  console.log('Grade C')
}
  else if(score >=40){
  console.log('Grade D')
} else
{
  console.log('Fail')
}


let temperature =-2
if (temperature >=30) {
  console.log('it is hot outside! wear light cloth')
} else if(temperature >=20){
  console.log('the weather is warm. t-shirt and jean will be fine')
} else if(temperature >=10){
  console.log('it is a bit chilly. wear a light jacket')
} else if(temperature >=0){
  console.log('it is cold. waer a heavy jacket and stay warm')
} else{
  console.log('it si freezing! bundle up with multiple layer')
}


let drink = 350;
if (drink >=500){
  console.log('these are coke brand')
} else if(drink >=400){
  console.log('these are america cola brand')
}
else if(drink <390){
  console.log('futter brand')
} else{
  console.log('this not a brand')
}

// let countdown = 10;
// while (countdown >=0) {
//   console.log("Time left: " + countdown + "seconds");
//   countdown--;
// }
// console.log("Time's up!");

let correctPassword = "success210";
let userInput = "";
let attempts = 0;
let maxAttempts = 2;

while (attempts < maxAttempts && userInput !== correctPassword) {
  userInput = prompt("enter your password: ");
  attempts++;
  
  if (userInput === correctPassword) {
    console.log("login successful");
  }else if(attempts < maxAttempts){
    console.log("incorret password. try again");
  } else{
    console.log("too mant attempts. access denied");
  }
}


// for (let i = 10; i >0; i--) {
//   console.log(s + i);
  
// }
// console.log("time up")

let num = 5;

for (let i = 1; i <= 10; i++){
  console.log(' ${num} x ${i} = ${num * i} ' )
}



