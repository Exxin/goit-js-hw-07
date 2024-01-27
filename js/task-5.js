 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const body = document.body;
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', function () {
    const randomColor = getRandomHexColor();

    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;

    const textColor = getContrastColor(randomColor);
    colorSpan.style.color = textColor;
  });

  function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000' : '#fff';
  }