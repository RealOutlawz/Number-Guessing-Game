let input = document.getElementById("number");
let inputButton = document.getElementById("enterButton");
let resetButton = document.getElementById("resetButton");
let higherOrLower = document.getElementById("highLowOrEqual");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let chances = 10;

inputButton.addEventListener("click", () => {
  if (input.value < randomNumber) {
    higherOrLower.textContent = "Too low!";
    chances--;
  } else if (input.value > randomNumber) {
    higherOrLower.textContent = "Too high!";
    chances--;
  } else if (input.value == randomNumber) {
    higherOrLower.textContent = "Correct!";
  }
});
