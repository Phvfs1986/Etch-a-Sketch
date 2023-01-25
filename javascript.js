let container = document.getElementById('container');
let html = document.querySelector('html');
let body = document.querySelector('body');
let button = document.createElement('button');

button.textContent = 'Draw';
button.style.padding = '20px';
body.insertBefore(button, container);

html.style.margin = '0';
html.style.padding = '0';
html.style.border = '0';
body.style.margin = '0';
body.style.padding = '0';
body.style.border = '0';
body.style.height = '100hv';
body.style.textAlign = 'center';
body.style.backgroundColor = 'black'
container.style.display = 'grid';
container.style.height = '94.4vh';

button = document.querySelector('button');
button.addEventListener('click', e => {(
    repeat(prompt('How many squares?')))});

function randomGen() {
    return Math.floor(Math.random() * 255);
}
function repeat(number) {
    if (number > 100) {
        alert('Maximum number of squares is 100');
    }
    else{
        container.style.gridTemplate = `repeat(${number}, 1fr) / repeat(${number}, 1fr)`;
        for (let i = 1; i <= (number * number); i++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.height = 'auto';
            cell.style.width = 'auto';
            cell.style.textAlign = 'center'; 
            cell.style.backgroundColor = `rgb(${randomGen()}, ${randomGen()}, ${randomGen()})`;
            container.appendChild(cell);
        }
    }
}
console.log(randomGen());
repeat(16);
