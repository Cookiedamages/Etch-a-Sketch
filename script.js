
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
let NumRows = 16;
let NumCols = 16;

for (let row = 0; row < NumRows; row++) {

    for(let col = 0;col < NumCols; col++){
        const square = document.createElement('div');
        square.classList.add('square');
        gameField.appendChild(square);
    }
}

//changing square's color while hovering

function changeColor (event) {
    event.target.style.backgroundColor = 'black'
}

let squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
});

//creating buttons with number of squares

const buttonArea = document.createElement('div');
buttonArea.classList.add('buttonArea');
div.appendChild(buttonArea);

const firstButton = document.createElement('button');
firstButton.classList.add('button');
firstButton.textContent = '16 x 16';
buttonArea.appendChild(firstButton);

firstButton.addEventListener('click', function() {
    NumRows = 16;
    NumCols = 16;
    resetGameField();
});

const secondButton = document.createElement('button');
secondButton.classList.add('button');
secondButton.textContent = '32 x 32';
buttonArea.appendChild(secondButton);

secondButton.addEventListener('click', function() {
    NumRows = 32;
    NumCols = 32;
    resetGameField();
});

const thirdButton = document.createElement('button');
thirdButton.classList.add('button');
thirdButton.textContent = '64 x 64';
buttonArea.appendChild(thirdButton);

thirdButton.addEventListener('click', function() {
    NumRows = 64;
    NumCols = 64;
    resetGameField();
});

//resetting a gameField space

function resetGameField() {
    squares.forEach(square => {
        square.removeEventListener('mouseover', changeColor);
    });

    gameField.innerHTML = '';

    for (let row = 0; row < NumRows; row++) {
        for (let col = 0; col < NumCols; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            gameField.appendChild(square);
        }
    }

    squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', changeColor);
    });
}


