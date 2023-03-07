const container = document.querySelector(".container");
let i = 1;
while(i <= 16){
    const div = document.createElement("div");
    div.textContent = i;
    container.appendChild(div);
    i++;
}

