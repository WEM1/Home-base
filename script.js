let player = 0;
let game = [];
let title = document.querySelector(".title");

for (let i = 0; i < 9; i++) {
  game.push(document.createElement("button"));
  let element = document.createElement("button");
  document.querySelector("main").appendChild(element);
  element.setAttribute("class", `playing field${i}`);
}
console.log(game);
document.querySelectorAll(".playing").forEach((element) => {
  element.onclick = () => {
    if (player === 0 && element.innerText === "") {
      element.innerText = "O";
      player++;
      console.log("O");
      haswon();
    } else if (element.innerText === "") {
      element.innerText = "X";
      player--;
      console.log("X");
      haswon();
    }
  };
});
function haswon() {
  if (
    (document.querySelector(".field0").innerText ===
      document.querySelector(".field1").innerText &&
      document.querySelector(".field1").innerText ===
        document.querySelector(".field2").innerText &&
      document.querySelector(".field0").innerText) ||
    /*  */ (document.querySelector(".field3").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field5").innerText &&
      document.querySelector(".field3").innerText) ||
    /*  */ (document.querySelector(".field6").innerText ===
      document.querySelector(".field7").innerText &&
      document.querySelector(".field7").innerText ===
        document.querySelector(".field8").innerText &&
      document.querySelector(".field6").innerText) ||
    /*  */ (document.querySelector(".field0").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field8").innerText &&
      document.querySelector(".field0").innerText) ||
    /*  */ (document.querySelector(".field2").innerText ===
      document.querySelector(".field4").innerText &&
      document.querySelector(".field4").innerText ===
        document.querySelector(".field6").innerText &&
      document.querySelector(".field2").innerText)
  ) {
    title.innerText = `Spieler ${player} hat gewonnen!`;
  }
}
