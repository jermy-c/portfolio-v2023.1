var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
})