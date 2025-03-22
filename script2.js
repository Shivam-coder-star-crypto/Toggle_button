const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    toggleButton.innerHTML = "🌞 Light Mode";
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', currentTheme);

    
    toggleButton.innerHTML = body.classList.contains('dark-mode') ? "🌞 Light Mode" : "🌙 Dark Mode";
});