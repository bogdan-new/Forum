let button = document.querySelector('.theme-button');
let body = document.body;
	body.classList.add('white-theme');

button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('white-theme');
});
















































