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
gameField.id = 'gameField';

div.appendChild(gameField);