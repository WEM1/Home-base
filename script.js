let activate = document.createElement("button");
document.querySelector("header").appendChild(activate);
activate.textContent = "Activate";
activate.className += "activate";

let calculator = [];
let display = document.createElement("input");
document.querySelector("main").appendChild(display);
display.className += "display-calculator";
console.log(calculator);
let operators = ["+", "-", "*", "^", "/", "%", "="];

activate.onclick = () => {
  let changes = document.querySelector(".chosen");
  activate.remove();
  changes.innerText = "There you go!";
  for (let i = 0; i < 4; i++) {
    calculator.push([]);
    if (i < 3) {
      for (let j = 0; j < 3; j++) {
        calculator[i].push(j + 1 + 3 * i);
        let element = document.createElement("button");

        document.querySelector("main").appendChild(element);
        element.className = `calculate-numbers${calculator[i][j]}`;
        element.innerText = calculator[i][j];
      }
      for (let l = 3; l < 4; l++) {
        calculator[i].push(operators[i]);
        let element = document.createElement("button");

        document.querySelector("main").appendChild(element);
        element.className = `calculate-op${calculator[i][l]}`;
        element.innerText = calculator[i][l];
      }
    } else {
      for (let m = 0; m < 4; m++) {
        calculator[i].push(operators[m + 3]);
        let element = document.createElement("button");

        document.querySelector("main").appendChild(element);
        (element.className = "button"), `calculate-op2${calculator[i][m]}`;
        element.innerText = calculator[i][m];
      }
    }
  }
  console.log(calculator);
};
