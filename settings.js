// Open settings modal
function openModal() {
    document.getElementById('settingsModal').style.display = 'block';
}

// Close settings modal
function closeModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

// Save settings function (add your logic here)
function saveSettings() {
    alert('Settings saved!');
    closeModal();
}

// Attach click event to the floating button
document.querySelector('.floating-button').onclick = openModal;

function toggleSettings() {
    const modal = document.getElementById('settingsModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Change background color based on color picker
document.getElementById('colorPicker').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

