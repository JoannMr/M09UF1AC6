const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const header = document.querySelector('header');
const catalogo = document.querySelector('.catalogo');
const footer = document.querySelector('.footer');
const productos = document.querySelectorAll('.producto');
const btnCargar = document.querySelector('.btn-cargar');
const categorias = document.querySelectorAll('.categorias a');

function setLightTheme() {
    body.style.backgroundColor = '#EAEAEA';
    header.style.backgroundColor = '#C5C5C5';
    header.style.color = '#000000'; 
    footer.style.color = '#000000';
    footer.querySelectorAll('a').forEach(a => {
        a.style.color = '#000000'; 
    });
    btnCargar.style.backgroundColor = '#6a5071';
    btnCargar.style.color = '#ffffff';

    productos.forEach(producto => {
        producto.style.backgroundColor = '#C5C5C5';
        producto.style.color = '#000000';
    });

    const h1 = document.querySelector('.catalogo h1');
    h1.style.color = '#000000';
    h1.style.textShadow = '2px 3px 4px rgba(0, 0, 0, 0.7)';
    categorias.forEach(categoria => {
        categoria.style.color = '#D1A8D6';
    });

    const botonesAccion = document.querySelectorAll('.producto .acciones button');
    botonesAccion.forEach(boton => {
        boton.style.backgroundColor = '#6a5071';
        boton.style.color = '#ffffff';
    });
}

function setDarkTheme() {
    body.style.backgroundColor = '#412A40';
    header.style.backgroundColor = '#3e2d40';
    header.style.color = '#ffffff'; 
    footer.style.color = '#ffffff';
    btnCargar.style.backgroundColor = 'transparent';
    btnCargar.style.color = '#ffffff';
    footer.querySelectorAll('a').forEach(a => {
        a.style.color = '#ffffff'; 
    });

    productos.forEach(producto => {
        producto.style.backgroundColor = '#2A1829';
        producto.style.color = '#ffffff';
    });

    const h1 = document.querySelector('.catalogo h1');
    h1.style.color = '#ffffff';
    h1.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.7)'; 
    categorias.forEach(categoria => {
        categoria.style.color = '#D1A8D6';
    });

    const botonesAccion = document.querySelectorAll('.producto .acciones button');
    botonesAccion.forEach(boton => {
        boton.style.backgroundColor = '#5A3766';
        boton.style.color = '#ffffff';
    });
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});

if (themeSwitch.checked) {
    setLightTheme();
} else {
    setDarkTheme();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.catalogo').classList.add('animate-fade-in', 'catalogo');
    document.querySelectorAll('.categorias a').forEach(item => {
      item.classList.add('animate-fade-in');
    });
    document.querySelectorAll('.producto').forEach(item => {
      item.classList.add('animate-fade-in');
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
