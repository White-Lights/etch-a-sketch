let sqCount = 16;
let maxWidth = 550;

function createGrid(sqCount) {
    let boxWidth = maxWidth / sqCount;
    for(i = 1; i <= (sqCount ** 2); i++) {
        let box = document.querySelector(".gridContainer");
        let div = document.createElement("div");
        div.style.width = `${boxWidth - 1}px`;
        div.classList.add("gridBlock");
        // div.textContent = `${i}`
        box.appendChild(div);
    }
}

createGrid(sqCount);