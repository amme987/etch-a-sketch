const container = document.querySelector(".container");
const button = document.querySelector("button");
const checkbox = document.querySelector("#grid");
let divs;
let number = 16;

createGrid();

button.addEventListener("click", () => {
  // Set to 16x16 grid when user hits "cancel" or enters number equal to or less than 0
  do {
    number = Number(
      prompt("Enter number of squares per side for new grid", 16)
    );
  } while (number > 100);
  if (number <= 0) {
    number = 16;
  }
  deleteGrid();
  createGrid();
});

// Generate grid with specified number of rows and columns
function createGrid() {
  let i = 1;
  let max = Math.pow(number, 2);
  while (i <= max) {
    const div = document.createElement("div");
    container.appendChild(div);
    i++;
  }
  container.style.cssText = `grid-template-rows: repeat(${number}, auto); grid-template-columns: repeat(${number}, auto);`;
  divs = document.querySelectorAll(".container div");
  checkBox();

  changeColor(divs);
}

// Change color and brightness of divs
function changeColor() {
  divs.forEach((div) =>
    div.addEventListener("mouseover", () => {
      if (div.style.filter === "") {
        div.style.backgroundColor = `rgb(${randomColor()} ${randomColor()} ${randomColor()})`;
        div.style.filter = "brightness(1.0)";
      } else {
        let bright = Number(div.style.filter.slice(11, -1)).toFixed(1);
        if (bright == 0) {
          return;
        }
        div.style.backgroundColor = `rgb(${randomColor()} ${randomColor()} ${randomColor()})`;
        div.style.filter = `brightness(${bright - 0.1})`;
      }
    })
  );
}

// Generate random number from 0-255 for RGB values
function randomColor() {
  return Math.floor(Math.random() * 256);
}

function deleteGrid() {
  divs.forEach((div) => {
    container.removeChild(div);
  });
}

checkbox.addEventListener("click", checkBox);

// Add or remove grid lines based on user preference
function checkBox() {
  if (checkbox.checked) {
    divs.forEach((div) => {
      div.style.border = "solid thin";
    });
  } else if (!checkbox.checked) {
    divs.forEach((div) => {
      div.style.border = "none";
    });
  }
}
