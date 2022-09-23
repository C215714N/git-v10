window.addEventListener('DOMContentLoaded', () => {
// Declaraciones
    const d = document;
    const menuButton = d.querySelector('nav [class*="btn"]');
    const menuList = d.querySelector('nav .menu');
// Cabecera

// Navegacion
    menuButton.onclick = () => menuList.classList.toggle('active');
// Contenido

// Pie de Pagina

}   )