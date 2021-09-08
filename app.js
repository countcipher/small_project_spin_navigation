const circle = document.querySelector('.circle');
const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

open.addEventListener('click', () => {
    circle.classList.add('show-nav');
    nav.classList.add('show-menu');
});

close.addEventListener('click', () => {
    circle.classList.remove('show-nav');
    nav.classList.remove('show-menu');
});

body.addEventListener('click', (e) => {
    if(!e.target.classList.contains('nav-machine')){
        console.log('click');
        circle.classList.remove('show-nav');
        nav.classList.remove('show-menu');
    }
});