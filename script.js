const container = document.querySelector("#container");
const header = document.querySelector("#header");
let color = document.querySelector("#color");

const sizeLabel = document.createElement("p");
const btn = document.createElement("button");


let size = 16;
sizeLabel.textContent = `Size: ${size} x ${size}`;
header.appendChild(sizeLabel);

drawGrid(size);


const sizeBtn = document.querySelector("#sizeBtn");

sizeBtn.addEventListener("click", () => {
    size = Number(prompt("Size?"));
    if (size > 100 || isNaN(size)) {
        let clickEvent = new Event("click");
        alert("Size is too large or incorrect input");
        sizeBtn.dispatchEvent(clickEvent);
    } else {

        sizeLabel.textContent = `Size: ${size} x ${size}`;
        container.textContent = "";
        drawGrid(size);
    }
})



function drawGrid(divPerSide) {
    for (let i = 0; i < divPerSide; i++) {
        let hDiv = document.createElement("div");
        hDiv.setAttribute("id", "hDiv");
        container.appendChild(hDiv);
        for (let j = 0; j < divPerSide; j++) {
            let vDiv = document.createElement("div");
            vDiv.setAttribute("id", "vDiv");
            hDiv.appendChild(vDiv);
    
            vDiv.addEventListener("mouseenter", (e) => {
                if (e.shiftKey) {
                    vDiv.style.backgroundColor = color.value;
                }
            })
            
            vDiv.addEventListener('mouseenter', (e) => {
                if (e.metaKey) {
                    vDiv.style.backgroundColor = "white";
                }
            })

            document.addEventListener("keypress", (e) => {
                if (e.key === 'e') {
                    vDiv.style.backgroundColor = "white";
                }
            })
        }
    }
}




