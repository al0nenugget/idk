// Open settings modal
function openModal() {
    document.getElementById('settingsModal').style.display = 'block';
}

// Close settings modal
function closeModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

// Save settings and change color scheme
function saveSettings() {
    const selectedColor = document.getElementById('colorPicker').value;
    changeColorScheme(selectedColor);
    localStorage.setItem('colorScheme', selectedColor); // Save color choice
    alert('Settings saved!');
    closeModal();
}

// Attach click event to the floating button
document.querySelector('.floating-button').onclick = openModal;

// Change color scheme based on the selected color
function changeColorScheme(color) {
    document.documentElement.style.setProperty('--primary-color', color);
}

// Load saved color scheme on page load
window.onload = function() {
    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme) {
        changeColorScheme(savedColorScheme);
    }
}

// Event listener for color picker
document.getElementById('colorPicker').addEventListener('input', function() {
    changeColorScheme(this.value);
});

function changeColorScheme(newColor) {
  document.documentElement.style.setProperty('--primary-color', newColor);
  document.documentElement.style.setProperty('--shadow-color', newColor + '80'); // Example of changing shadow color
}

