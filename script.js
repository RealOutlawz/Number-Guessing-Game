let input = document.getElementById("number");
let inputButton = document.getElementById("enterButton");
let resetButton = document.getElementById("resetButton");
let result = document.getElementById("feedback");
let chancesLeft = document.getElementById("chancesLeft");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let chances = 10;
chancesLeft.textContent = `You have ${chances} attempts left.`;

inputButton.addEventListener("click", () => {
  if (input.value < randomNumber) {
    result.textContent = "Too low!";
    chances--;
  } else if (input.value > randomNumber) {
    result.textContent = "Too high!";
    chances--;
  } else if (input.value == randomNumber) {
    result.textContent = "Correct! You won!";
  }
  chancesLeft.textContent = `${chances} attempts left.`;
  if (chances === 0) {
    result.textContent = `You lost! The correct number was ${randomNumber}.`;
    inputButton.disabled = true;
  }
});

resetButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  chances = 10;
  result.textContent = "";
  input.value = "";
  chancesLeft.textContent = `Chances left: ${chances}`;
  inputButton.disabled = false;
});
