const container = document.querySelector(".container");
let i = 1;
while (i <= 256) {
  const div = document.createElement("div");
  div.textContent = i;
  container.appendChild(div);
  // container.style.cssText = 'grid-template-rows: auto; grid-template-columns: auto;';
  i++;
}

container.style.cssText =
  "grid-template-rows: repeat(16, auto); grid-template-columns: repeat(16, auto);";
