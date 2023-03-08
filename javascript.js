const container = document.querySelector(".container");
const button = document.querySelector("button");
const checkbox = document.querySelector("#grid");
let divs;
let number = 16;

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
    // div.textContent = i;
    container.appendChild(div);
    i++;
  }
  container.style.cssText = `grid-template-rows: repeat(${number}, auto); grid-template-columns: repeat(${number}, auto);`;
  divs = document.querySelectorAll(".container div");

  // Change color of divs
  divs.forEach((div) =>
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "aqua";
    })
  );
}

function deleteGrid() {
  divs.forEach((div) => {
    container.removeChild(div);
  });
}

// Checkbox to add or remove grid lines based on user preference
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    divs.forEach((div) => {
      div.style.border = "solid thin";
    });
  } else {
    divs.forEach((div) => {
      div.style.border = "none";
    });
  }
});

createGrid();
