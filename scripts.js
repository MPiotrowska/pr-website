//variables

var burgerMenu = document.getElementById('burger-menu');

var description = document.getElementById('description');
//functions

function openMenu() {
    alert('hello');
}

function toggleDescription() {
    description.classList.toggle('hidden')
}
burgerMenu.addEventListener('click', toggleDescription);