// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const ctaBtn = document.getElementById('cta-btn');

// Check for saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// Interactive Button Click Event
ctaBtn.addEventListener('click', () => {
    alert('🎉 Congratulations! Your project setup is fully working.');
});