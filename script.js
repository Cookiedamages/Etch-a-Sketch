//creating a div

const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.querySelector('body');
console.log(body);

body.appendChild(div);

console.log(div);

//creating an H1 element and placing it before header

const header = document.createElement('h1');
header.textContent = 'Etch-a-Sketch';

console.log(header);

div.insertAdjacentElement('beforebegin', header)

//create a game-field in the wrapper element
const gameField = document.createElement('div');
gameField.classList.add('gameField');

div.appendChild(gameField);

//creating a grid with a 16x16 square of div's
const NumRows = 16;
const NumCols = 16;

for (let row = 0; row < NumRows; row++) {
    for(let col = 0;col < NumCols; col++){
        const square = document.createElement('div');
        square.classList.add('square');
        div.appendChild(square);
    }
}

//