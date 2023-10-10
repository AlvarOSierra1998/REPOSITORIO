function toggleSpoiler(button) {
    var content = button.nextElementSibling;
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'inline';
        button.textContent = 'Ocultar';
    } else {
        content.style.display = 'none';
        button.textContent = 'Mostrar';
    }
}