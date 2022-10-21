const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav-principal');
const body = document.querySelector('body');
const wrapperBackground = document.querySelector('.wrapper-backgroud-color');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    body.classList.toggle('body-active');
    wrapperBackground.classList.toggle('wrapper-active');
    toggleButton.classList.toggle('open');

})