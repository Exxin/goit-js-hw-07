// script.js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  clearBoxes();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxesContainer.appendChild(box);
    size += 10;
  }

  input.value = '';
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
}
