let input = document.getElementById("number");
let inputButton = document.getElementById("enterButton");
let resetButton = document.getElementById("resetButton");
let result = document.getElementById("feedback");
let chancesLeft = document.getElementById("chancesLeft");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let chances = 10;
chancesLeft.textContent = `You have ${chances} chances left.`;
let span = document.createElement("span");
span.textContent = "Start guessing!";
result.appendChild(span);

inputButton.addEventListener("click", () => {
  let convertedNumber = Number(input.value);
  if (convertedNumber === NaN) {
    result.textContent = "Please enter a number between 1 and 100.";
  } else {
    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }
    span.textContent = "";
    if (convertedNumber < randomNumber) {
      span.style.color = "red";
      span.textContent = "Too low!";
      result.appendChild(span);
      chances--;
    } else if (convertedNumber > randomNumber) {
      span.style.color = "red";
      span.textContent = "Too high!";
      result.appendChild(span);
      chances--;
    } else if (convertedNumber == randomNumber) {
      span.style.color = "green";
      span.textContent = "Correct! You won!";
      result.appendChild(span);
    }
  }
  chancesLeft.textContent = `${chances} chances left.`;
  if (chances === 0) {
    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }
    span.style.color = "red";
    span.textContent = `You lost! The correct number was ${randomNumber}.`;
    input.disabled = true;
    inputButton.disabled = true;
    result.appendChild(span);
  }
});

resetButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  chances = 10;
  result.textContent = "";
  input.value = "";
  chancesLeft.textContent = `You have ${chances} chances left.`;
  inputButton.disabled = false;
  input.disabled = false;
  span.style.color = "white";
  span.textContent = "Start guessing!";
  result.appendChild(span);
});
