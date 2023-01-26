let html = document.querySelector('html');
let body = document.querySelector('body');
let main = document.getElementById('main');
let buttonsContainer = document.getElementById('buttons');
let container = document.getElementById('container');
let btnColors = document.getElementById('btn-colors');

let draw = document.createElement('button');
let clearBoard = document.createElement('button');
let drawRandom = document.createElement('button'); 
let drawBlack = document.createElement('button');

draw.textContent = 'Draw Squares';
draw.className = 'draw-button';
buttonsContainer.appendChild(draw);

clearBoard.textContent = 'Clear';
clearBoard.className = 'clear-button';
buttonsContainer.appendChild(clearBoard)

drawBlack.textContent = 'Black';
drawBlack.style.backgroundColor = 'black';
drawBlack.style.color = 'white';
drawBlack.className = 'Black-button';
btnColors.appendChild(drawBlack);

drawRandom.textContent = 'Random';
drawRandom.className = 'rnd-colors-button';
btnColors.appendChild(drawRandom);


container.style.display = 'grid';
container.style.height = '40vh';
container.style.width = '40vw'

let elements = document.getElementsByClassName('cell');
repeat(16);


draw.addEventListener('click', e => {(
    repeat(prompt('How many squares?')
))});

clearBoard.addEventListener ('click', e => {(
    clear()
)});

let shiftState = null;

document.onkeydown = function(e) {
    if (e.key == 'Shift'){
        shiftState = true;
    }
}
document.onkeyup = function(e) {
    if (e.key == 'Shift'){
        shiftState = false;
    }
}

// container.addEventListener ('mousedown', e => {
//     if (shiftState) {
//         e.target.style.backgroundColor = 'white';
//     }
// });

drawRandom.addEventListener('click', e => {(
    addEvent(elements, randomizeColors())
)});

drawBlack.addEventListener('click', e => {
    addEvent(elements, 'black')
});

function randomGen() {
    return Math.floor(Math.random() * 255);
}
function randomizeColors() {
    drawRandom.style.backgroundColor = `rgb(${randomGen()}, ${randomGen()}, ${randomGen()})`
    return drawRandom.style.backgroundColor;
}
function repeat(number) {
    container.innerHTML = '';
    if (number > 100) {
        alert('Maximum number of squares is 100');
    }
    else{
        container.style.gridTemplate = `repeat(${number}, 1fr) / repeat(${number}, 1fr)`;
        for (let i = 1; i <= (number * number); i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.height = 'auto';
            cell.style.width = 'auto';
            cell.style.textAlign = 'center';
            //cell.style.backgroundColor = `rgb(${randomGen()}, ${randomGen()}, ${randomGen()})`;
            cell.style.backgroundColor = 'white';
            container.appendChild(cell);
        }
    }
    addEvent(elements, 'black');
}
function addEvent(elements, color) {
    for (let element of elements) {
        element.addEventListener('mousedown', e => {
            if (shiftState) {
                e.target.style.backgroundColor = 'white';
            }
            else {
                e.target.style.backgroundColor = color;
            }
        })
        element.addEventListener('mouseenter', e => {
            if (e.buttons == 1) {
                if (shiftState) {
                    e.target.style.backgroundColor = 'white';
                }
                else {
                    e.target.style.backgroundColor = color;
                }
            }
        })
    }
}
function clear() {
    for (let element of elements) {
        element.style.backgroundColor = 'white';
    }
}