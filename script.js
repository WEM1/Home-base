/* let name = document.querySelector(".submit");
let theText = submit.value;
console.log(theText);
let eingabe = document.querySelector(".choosen-name");
eingabe.innerHTML = "Dein Name ist " + name.length + " Zeichen lang"; */

/* let number1 = prompt("Give me a random number");
if (number1 % 2 == 0) {
  alert("Your Number is even");
} else {
  alert("Your Number is not even");
}

let a = 10000;
let b = 1234;
let c = -500;
alert(a + " " + b + " " + c);
 */
/* 8 */
/* let isRunning = true;
if (isRunning) {
  console.log(isRunning);
} else {
  console.log(isRunning);
} */
/* 9 */
/* let isRunning = false;
if (isRunning) {
  console.log(isRunning);
} else if (!isRunning) {
  console.log(isRunning);
} */
/* 10 */
/* let a = 20,
  b = "20";
if (a == b) {
  console.log("Yes,they are equal");
} else {
  console.log("No,they are not equal");
}
if (a === b) {
  console.log("Yes,they are equal");
} else {
  console.log("No,they are not equal");
} */ /*11 */
/* let a, b;
a = b = true;
if (a && b) {
  console.log("a && b Condition is true");
}
if (a || b) {
  console.log("a || b Condition is true");
}
if (!a && b) {
  console.log("!a && b Condition is true");
}
if (!a || b) {
  console.log("!a || b Condition is true");
}
if (!a && !b) {
  console.log("!a && !b Condition is true");
}
if (!a || !b) {
  console.log("!a || !b Condition is true");
}
 */
/* 12 */
/* let i = 1;
for (i; i <= 6; i++) {
  alert("The current step is " + i);
} */
/* 13 */
/* let step = 1;
while (step <= 6) {
  switch (step) {
    case 1:
      alert("The current step is " + step);
      step++;
      break;
    case 2:
      alert("The current step is " + step);
      step++;
      break;
    case 3:
      alert("The current step is " + step);
      step++;
      break;
    case 4:
      alert("The current step is " + step);
      step++;
      break;
    case 5:
      alert("The current step is " + step);
      step++;
      break;
    case 6:
      alert("The current step is " + step);
      step++;
      break;

    default:
      break;
  }
} */
/* 14+15 */
/* function sum(op1, op2) {
  alert(+op1 + +op2);
}
sum(prompt(), prompt()); */
/* 16 */
/*  let a = 10; (global Skope)

 function double(x){
 const b = x; (Local Scope)
 return b*2;
 }

 if(double(6) > 10){
 alert("This is a: " + a);
 alert("This is b: " + b);
 let b = a;(global Scope)
 if(b>=a){
 let c = a + b;(global scope)
 }else{
 let c = a + b;(global Scope)
 }
 alert("This is c: " + c);
 }
 alert("This is b: " + b); */
/* 17 */
/* let counter = 0;
while (counter <= 200) {
  alert(counter);
  counter += 10;
} */
/* 18 */
/* let counter = 0;
for (counter; counter <= 200; counter += 10) {
  alert(counter);
} */
/* 19 */
/* let input = document.querySelector(".chosenname");
let star = "*";
let line1 = "";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    line1 = line1 + star;
    input.innerText = line1;
  }
  line1 = line1 + "\n ";
} */
/* 21 */
/* let mailis = document.querySelector(".chosenname");
function bosch(mail) {
  let boschmail = /^([A-z])+\.([A-z])+\d?@de\.bosch\.com/;
  if (boschmail.test(mail)) {
    alert(mail + " ist eine Bosch-Mail");
    mailis.innerText = "valid";
  } else {
    alert(mail + " ist keine Bosch-Mail");
    mailis.innerText = "valid";
  }
}
bosch(prompt("Deine Mail")); */

/* console.log(word1[]); */

/* 22 */
/* let date = /^(0?[1-9]|[12][0-9]|3[01])[\/.](0?[1-9]|1[012])[\/.]\d{4}$/;
if (date.test(prompt("Datum"))) {
  console.log("valid");
} else {
  console.log("not valid");
} */
/* 23/24 */
/* const numbers = [100, 100, 100, 100, 100];
let sum = 0;
for (let i = 4; i > -1; i--) {
  sum += +numbers[i];
  numbers.pop();
}
console.log(sum);
console.log(numbers); */
/* 25 */
/* let array = [];
let counter = 1;
console.log(array);
for (let i = 0; i < 3; i++) {
  array.push([]);
  for (let j = 0; j < 3; j++) {
    array[i].push(counter);
    counter += 1;
  }
}
console.log(array); */

/* 26 */
