// Var Declaration
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("random-button");
const copyButton = document.getElementById("copy-button");
const selectedColor = document.getElementById("selected-color");

// Function Declaration
function getRandomHex() {
  return Math.floor(Math.random() * hexValues.length);
}

function getRandomColor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hexValues[getRandomHex()];
  }
  return randomColor;
}

function changeColor() {
  let color = getRandomColor();
  document.body.style.backgroundColor = color;
  selectedColor.innerHTML = color;
  selectedColor.style.color = color;
}

function copyBackground() {
  navigator.clipboard.writeText(selectedColor.innerText);
}

//Event Listeners
button.addEventListener("click", changeColor);
copyButton.addEventListener("click", copyBackground);
changeColor();
