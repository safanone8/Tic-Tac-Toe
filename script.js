let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let count = 0;
turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
};
let clickCount = () => {
  boxes.addEventListener("click", () => {
    count++;
  });
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (turnO) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes;
};

const drow = () => {
  msg.innerText = `This match is a drow try again`;
  msgContainer.classList.remove("hide");
  disableBoxes;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      } 
      else if (count === 9 && pos1.innerText != "" && pos2.innerText != "" && pos3.innerText != "") {
        drow();
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
