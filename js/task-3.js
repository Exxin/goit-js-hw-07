const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', updateGreeting);

  function updateGreeting() {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || 'Anonymous';
}

function showPlaceholder() {
  document.getElementById('name-input').classList.remove('placeholder-hidden');
}

function hidePlaceholder() {
  document.getElementById('name-input').classList.add('placeholder-hidden');
}

