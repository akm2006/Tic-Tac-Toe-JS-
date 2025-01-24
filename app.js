let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true;
let newGame = document.querySelector(".newGame");
let msg = document.querySelector(".msg");
let winner = document.querySelector(".winner");
msg.style.display = "none";
const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  msg.style.display = "none";
  turnO = true;
};
newGame.addEventListener("click", enableBoxes);
resetBtn.addEventListener("click", enableBoxes);
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO == true) {
      box.innerText = "O";
      turnO = false;
      box.style.color = "#92BCEA";
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "#F64740";
    }
    box.disabled = true;
    setTimeout(checkWinner,2000);
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner");
        disableBoxes();
        winner.innerText = `Congratulations! ${pos1Val} is the winner.`;
        msg.style.display = "block";
        return;
      }
    }
  }
  const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
  if (allFilled) {
    console.log("draw");
    winner.innerHTML = `It's a draw!`;
    msg.style.display = "block";
    disableBoxes();

    return;
  }
};
