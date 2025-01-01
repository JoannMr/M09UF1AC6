document.getElementById('themeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        
        document.querySelector('header').classList.add('light-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.querySelector('footer').classList.add('light-mode');
        document.querySelector('footer').classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('header').classList.remove('light-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelector('footer').classList.remove('light-mode');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').classList.add('animate-fade-in', 'header');
    document.querySelector('main').classList.add('animate-fade-in', 'main');
    document.querySelector('footer').classList.add('animate-fade-in', 'footer');
});

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const href = link.getAttribute('href');
        document.body.classList.add('animate-fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    });
});
