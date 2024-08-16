let input = document.getElementById("number");
let inputButton = document.getElementById("enterButton");
let resetButton = document.getElementById("resetButton");
let result = document.getElementById("feedback");
let chancesLeft = document.getElementById("chancesLeft");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let chances = 10;
chancesLeft.textContent = `You have ${chances} chances left.`;

inputButton.addEventListener("click", () => {
  let convertedNumber = Number(input.value);
  if (convertedNumber === NaN) {
    result.textContent = "Please enter a number between 1 and 100.";
  } else {
    if (convertedNumber < randomNumber) {
      result.textContent = "Too low!";
      chances--;
    } else if (convertedNumber > randomNumber) {
      result.textContent = "Too high!";
      chances--;
    } else if (convertedNumber == randomNumber) {
      result.textContent = "Correct! You won!";
    }
  }
  chancesLeft.textContent = `${chances} chances left.`;
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
  chancesLeft.textContent = `You have ${chances} chances left.`;
  inputButton.disabled = false;
});
