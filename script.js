let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let winnerResult = document.querySelector(".winner-result");
let msg = document.querySelector("#msg");

let turn0 = true; // playerX ,playerO
 //  === array of array means two dimensional array part for mathematical logic or winning chances
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


// =========================== main logic and condition for game 
boxes.forEach((box) => {
 box.addEventListener("click", () => {
  console.log("successfully executed");

  if (turn0) {
   //playerO
   box.innerText = "O";
   turn0 = false;
  } else {
   //playerX
   box.innerText = "X";
   turn0 = true;
  }

  box.disabled = true;

  checkWinner();
 });
});

//  check winner function ==============
const checkWinner = () => {
 for (let pattern of winPatterns) {
  let posValue1 = boxes[pattern[0]].innerText;
  let posValue2 = boxes[pattern[1]].innerText;
  let posValue3 = boxes[pattern[2]].innerText;

  if (posValue1 != "" && posValue2 != "" && posValue3 != "") {
   if (posValue1 === posValue2 && posValue2 === posValue3) {
    console.log("winner !", posValue1);

    showWinner(posValue1);
   }
  }
 }
};

// ========= disable part for game to stop 
const disableBoxes = () => {
 for (let box of boxes) {
  box.disabled = true;
 }
};

//  enable function part for game to replay
const enableBoxes = () => {
 for (let box of boxes) {
  box.disabled = false;
  box.innerText = "";
 }
};
// ========winner show part function
const showWinner = (winner) => {
 msg.innerText = `Congratulation , Winner is ${winner}`;
 winnerResult.classList.remove("hide");
 disableBoxes();
};
// ======== reset game part function
const resetGame = () => {
 turn0 = true;
 enableBoxes();
 winnerResult.classList.add("hide");
};
// ======= used event listiner part
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
