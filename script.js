const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Изменение текста кнопки в зависимости от темы
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️'; // Солнце для светлой темы
    } else {
        themeToggleButton.textContent = '🌙'; // Луна для темной темы
    }
});
