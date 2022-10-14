window.addEventListener('DOMContentLoaded', () => {
// Declaraciones
    const d = document;
    const menuButton = d.querySelector('nav [class*="btn"]');
    const menuList = d.querySelector('nav .menu');
    const mapButton = d.querySelector('#footer .btn[class*="map-"]');
    const mapFrame = d.querySelector('#footer iframe.map');
// Funciones
    function toggle(target, element, a, b){
        element.classList.toggle('active') ?
        target.classList.replace(a,b) :
        target.classList.replace(b,a)
    }
// Cabecera

// Navegacion
    menuButton.onclick = (e) => toggle(e.target, menuList, 'btn-open','btn-close');
// Contenido

// Pie de Pagina
    mapButton.addEventListener('click', (e) => {
        toggle(e.target, mapFrame, 'map-open', 'map-close' )
    } )
}   )