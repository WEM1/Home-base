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
/* side-project */
/* let input = document.querySelector(".chosenname");
let line = " ";
let columnHeight = prompt("column Height");

for (let i = columnHeight; i > 0; i--) {
   for (let j = 0; j < i; j++) {
    line = line + "*";
    input.innerText = line;
  }
  line = line + "\n";
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
/* 25 ++++++ */

/* let activate = document.createElement("button");
document.querySelector("header").appendChild(activate);
activate.textContent = "Activate";
activate.className += "activate";

let initiateBox = document.createElement("button");
document.querySelector("header").appendChild(initiateBox);
initiateBox.textContent = "initiateBox";
initiateBox.className += "initiateBox";

let zahlenArray = [];

activate.onclick = () => {
  let changes = document.querySelector(".chosen");
  activate.remove();
  changes.innerText = "There you go!";
  for (let i = 0; i < 3; i++) {
    zahlenArray.push([]);
    for (let j = 0; j < 3; j++) {
      zahlenArray[i].push(j + 1 + 3 * i);
    }
  }
  console.log(zahlenArray);
};

initiateBox.onclick = () => {
  let element = document.createElement("div");
  console.log(zahlenArray.querySelectorAll("1"));

  element.className = `container${zahlenArray}`;
  element.innerText = zahlenArray;
};  */

/* document.querySelector("main").appendChild(element);
element.className = `container${zahlenArray[i][j]}`;
element.innerText = zahlenArray[i][j];

/* 26 */
/* let total = 0,
  gradeCounter = 1,
  classAverage;
const classCount = +prompt("ClassCount");

while (gradeCounter <= classCount) {
  grade = +prompt("Grade");
  total += grade;
  gradeCounter++;
  classAverage = total / gradeCounter;
  console.log(classAverage);
} */
/* 27 */
/* let paragraph = document.querySelector(".chosenname");
paragraph.style.color = "white";
paragraph.style.backgroundColor = "blue";
 */
/* 28 /29*/
/* let paragraph = document.getElementById("chosen");

paragraph.onclick = (x) => {
  paragraph.style.backgroundColor = "blue";
};
paragraph.onmouseover = (x) => {
  paragraph.innerHTML = "In Position";
};
paragraph.onmouseleave = (x) => {
  paragraph.innerHTML = "Hello There!";
}; */
/* 30 */
/* function firstFunction() {
  secondFunction();
}

function secondFunction() {
  thirdFunction();
}

function thirdFunction() {
  forthFunction();
}

function forthFunction() {
  headline.innerHTML = "Headline clicked";
}

//grab headline Element
let headline = document.getElementById("chosen");

//add headline click event
headline.onclick = function () {
  firstFunction();
};
 */
/* Calculator */

/* let activate = document.createElement("button");
document.querySelector("header").appendChild(activate);
activate.textContent = "Activate";
activate.className += "activate";

let calculator = [];
let display = document.createElement("input");
document.querySelector("main").appendChild(display);
display.className += "display-calculator";
console.log(calculator);
let operators = ["+", "-", "*", 0, "/", "%", "="];

function addElement(operator1, operator2) {
  let element = document.createElement("button");

  document.querySelector("main").appendChild(element);
  element.className = `calculate-numbers${calculator[operator1][operator2]}`;
  element.innerText = calculator[operator1][operator2];
}

activate.onclick = () => {
  let changes = document.querySelector(".chosen");
  activate.remove();
  changes.innerText = "There you go!";
  for (let i = 0; i < 4; i++) {
    calculator.push([]);
    if (i < 3) {
      for (let j = 0; j < 3; j++) {
        calculator[i].push(j + 1 + 3 * i);
        addElement(i, j);
      }
      for (let l = 3; l < 4; l++) {
        calculator[i].push(operators[i]);
        let element = document.createElement("button");
        addElement(i, l);
      }
    } else {
      for (let m = 0; m < 4; m++) {
        calculator[i].push(operators[m + 3]);
        addElement(i, m);
      }
    }
  }
  console.log(calculator);
};
calculator[1].onclick = () => {
  console.log("1");
}; */
let output1 = document.querySelector(".output1");
let output2 = document.querySelector(".output2");
document.querySelectorAll(".calculate-numbers").forEach((element) => {
  element.addEventListener("click", () => {
    output2.value += element.innerText;

    console.log(element.innerHTML);
  });
});
document.querySelector(".calculate-Is").addEventListener("click", () => {
  output1.value = eval(output2.value);
  output2.value = "";
});
document.querySelector(".calculate-C").addEventListener("click", () => {
  output1.value = "";
  output2.value = "";
});
