const container = document.querySelector(".container");
// console.log(divs[0].textContent);
let i = 1;
while (i <= 256) {
  const div = document.createElement("div");
  div.textContent = i;
  container.appendChild(div);
  // container.style.cssText = 'grid-template-rows: auto; grid-template-columns: auto;';
  i++;
}

const divs = Array.from(document.querySelectorAll(".container div"));

container.style.cssText =
  "grid-template-rows: repeat(16, auto); grid-template-columns: repeat(16, auto);";

divs.forEach((div) =>
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "aqua";
  })
);

// container.addEventListener('mouseover', e => console.log(e));
