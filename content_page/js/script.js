let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
let themeButton = document.querySelector('.theme-button');
let body = document.body;
let header = document.querySelector('.header');
let main = document.querySelector('.main');

body.classList.add('white-theme');
header.classList.add('white-theme');
main.classList.add('white-theme');

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('white-theme');
    
    header.classList.toggle('dark-theme');
    header.classList.toggle('white-theme');

    main.classList.toggle('dark-theme');
    main.classList.toggle('white-theme');
});