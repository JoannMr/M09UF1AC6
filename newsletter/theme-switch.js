document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("themeSwitch");

    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("light-theme", themeSwitch.checked);
        console.log(document.body.classList); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.main-container').classList.add('animate-fade-in');
    const articles = document.querySelectorAll('.news-article');
    articles.forEach((article, index) => {
        article.classList.add('animate-fade-in');
        article.style.animationDelay = `${0.5 + index * 0.2}s`; 
    });
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
