let p1Button = document.getElementById("p1Button");
let p2Button = document.getElementById("p2Button");
let resetButton = document.getElementById("resetButton");
let p1ScoreDisplay = document.querySelector("span");
let p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
let winningScore = document.querySelector("p span");
let winningScoreInput = document.querySelector("input");
let bodyBg=document.querySelector("body");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
// Wining score event listner and function
winningScoreInput.addEventListener("change", function () {
  reset();
  winningScore.textContent = winningScoreInput.value;
});
//player one button event listner and function
p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    p1ScoreDisplay.textContent = p1Score;
    if (p1ScoreDisplay.textContent === winningScore.textContent) {
      p1ScoreDisplay.classList.add("pale");
      bodyBg.style.backgroundColor='black';
      gameOver = true;
    }
  }
});
// player two button event listner and function
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    p2ScoreDisplay.textContent = p2Score;
    if (p2ScoreDisplay.textContent === winningScore.textContent) {
      p2ScoreDisplay.classList.add("pale");
      bodyBg.style.backgroundColor='black';
      gameOver = true;
    }
  }
});
// reset button event listner
resetButton.addEventListener("click", reset);
// reset function
function reset() {
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = 0;
  p2ScoreDisplay.textContent = 0;
  p1ScoreDisplay.classList.remove("pale");
  p2ScoreDisplay.classList.remove("pale");
  gameOver = false;
  bodyBg.style.backgroundColor='rgb(0, 109, 128)';
}
