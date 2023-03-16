// Var Declaration
const button = document.getElementById("random-button");
const selectedColor = document.getElementById("selected-color");

// Function Declaration
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function changeColor() {
  let color = "#" + getRandomColor();
  document.body.style.backgroundColor = color;
  selectedColor.innerHTML = color;
  selectedColor.style.color = color;
}

//Event Listeners

button.addEventListener("click", changeColor);
changeColor();
