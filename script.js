let player = 0;
let game = [];
let title = document.querySelector(".title");

let winsone = 0,
  winstwo = 0;

startgame();
function startgame() {
  for (let i = 0; i < 9; i++) {
    game.push(document.createElement("button"));
    let element = document.createElement("button");
    document.querySelector("main").appendChild(element);
    element.setAttribute("class", `playing field${i}`);
  }
}
console.log(game);
document.querySelectorAll(".playing").forEach((element) => {
  element.onclick = () => {
    if (player === 0 && element.innerText === "") {
      element.innerText = "O";
      player++;
      haswon();
    } else if (element.innerText === "") {
      element.innerText = "X";
      player--;
      haswon();
    }
  };
});
function haswon() {
  if (
    /* Zeile */ (document.querySelector(".field0").innerText ===
      document.querySelector(".field1").innerText &&
      document.querySelector(".field1").innerText ===
        document.querySelector(".field2").innerText &&
      document.querySelector(".field0").innerText) ||
    /* Zeile2 */ (document.querySelector(".field3").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field5").innerText &&
      document.querySelector(".field3").innerText) ||
    /* Zeile3 */ (document.querySelector(".field6").innerText ===
      document.querySelector(".field7").innerText &&
      document.querySelector(".field7").innerText ===
        document.querySelector(".field8").innerText &&
      document.querySelector(".field6").innerText) ||
    /* Spalte1 */ (document.querySelector(".field0").innerText ===
      document.querySelector(".field3").innerText &&
      document.querySelector(".field3").innerText ===
        document.querySelector(".field6").innerText &&
      document.querySelector(".field0").innerText) ||
    /* Spalte2 */ (document.querySelector(".field1").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field7").innerText &&
      document.querySelector(".field1").innerText) ||
    /* Spalte3 */ (document.querySelector(".field2").innerText ===
      document.querySelector(".field5").innerText &&
      document.querySelector(".field5").innerText ===
        document.querySelector(".field8").innerText &&
      document.querySelector(".field2").innerText) ||
    /* quer \ */ (document.querySelector(".field0").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field8").innerText &&
      document.querySelector(".field0").innerText) ||
    /* quer / */ (document.querySelector(".field2").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field6").innerText &&
      document.querySelector(".field2").innerText)
  ) {
    title.innerText = `Spieler ${player + 1} hat gewonnen!`;
    let endscreen = document.createElement("div");
    document.querySelector("main").appendChild(endscreen);
    endscreen.setAttribute("class", "endscreen");
    let counter = document.createElement("div");
    counter.setAttribute("class", "result");
    document.querySelector(".endscreen").appendChild(counter);

    if (player === 0) {
      winsone += 1;
      endscreen.innerText = `Player1 (X): ${winsone} \n Player2(O): ${winstwo}`;
      counter.innerText = `Player1 (X): ${winsone} Player2(O): ${winstwo}`;
    } else {
      winstwo += 1;
      endscreen.innerText = `Player1 (X): ${winsone} \n Player2(O): ${winstwo}`;
      counter.innerText = `Player1(X): ${winsone} Player2(O): ${winstwo}`;
    }
    document
      .querySelectorAll("button")
      .forEach((element) => (element.innerText = null));
  } else if (document.querySelectorAll(".playing").innerText) {
  }
}
let a = 25;
console.log(a < 26 ? 10 : 30);
console.log(a);
