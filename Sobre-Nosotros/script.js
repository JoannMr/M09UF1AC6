const themeSwitch = document.getElementById("themeSwitch");

function activateLightMode() {
    document.body.style.backgroundColor = "#EAEAEA"; 
    document.body.style.color = "#000"; 

    const header = document.querySelector("header");
    header.style.backgroundColor = "#C5C5C5";
    header.style.color = "#000";

    const heroText = document.querySelector(".hero-text");
    heroText.style.color = "#000"; 
    heroText.style.textShadow = "0px 1px 1px #000"; 

    const team = document.querySelector(".team");
    team.style.backgroundColor = "#C5C5C5"; 
    team.style.color = "#000"; 

    const teamHeading = team.querySelector("h2");
    teamHeading.style.textShadow = "0px 1px 1px #000"; 

    const footer = document.querySelector(".footer");
    footer.style.backgroundColor = "#EAEAEA"; 
    footer.style.color = "#000"; 

    const footerItems = footer.querySelectorAll("*");
    footerItems.forEach(item => {
        item.style.color = "#000";
    });
}

themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
        activateLightMode(); 
    } else {
        location.reload(); 
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
