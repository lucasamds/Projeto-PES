let click = document.querySelector('.dropdown-toggle');
let menu = document.querySelector('.dropdown-menu');
let drop = document.querySelector('dropdown')
click.addEventListener("click", () => {
    menu.classList.toggle('show');
    drop.classList.toggle('show');
});