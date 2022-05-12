const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");
let container = document.getElementById("canvas");


function createDivs(size){
    for (let i=0; i<size; i++){
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
}

function removeDivs(){
    const content = Array.from(document.getElementsByClassName('content'))
    content.forEach(content => {
        content.remove();
    })
}

createDivs(100);

container.addEventListener("mouseover", (event) => {
    event.target.style.background = "black";
});

small.addEventListener("click", ()=> {
    removeDivs();
    container.className = "small";
    createDivs(100);
})

medium.addEventListener("click", () => {
    removeDivs();
    container.className = "medium";
    createDivs(256);
});

large.addEventListener("click", () => {
    removeDivs();
    container.className = "large";
    createDivs(400);
});