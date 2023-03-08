const container = document.querySelector(".container");
const button = document.querySelector("button");
let divs;
let number = 16;

button.addEventListener("click", () => {
  do {
    number = Number(
      prompt("Enter number of squares per side for new grid", 16)
    );
  } while (number > 100);

  //   console.log(number);
  deleteGrid(divs);
  createGrid(number);

  //   return number;
});

// Generate grid with specified number of rows and columns
function createGrid() {
  let i = 1;
  let max = Math.pow(number, 2);
  while (i <= max) {
    const div = document.createElement("div");
    div.textContent = i;
    container.appendChild(div);
    i++;
  }
  container.style.cssText = `grid-template-rows: repeat(${number}, auto); grid-template-columns: repeat(${number}, auto);`;
  divs = Array.from(document.querySelectorAll(".container div"));

  // Change color of divs
  divs.forEach((div) =>
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "aqua";
    })
  );
}

function deleteGrid(divs) {
  divs.forEach((div) => {
    container.removeChild(div);
  });
}

createGrid();

// function changeColor(divs) {
//   divs.forEach((div) =>
//     div.addEventListener("mouseover", () => {
//       div.style.backgroundColor = "aqua";
//     })
//   );
// }
