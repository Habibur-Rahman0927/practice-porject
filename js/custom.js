const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav');
navToggle.addEventListener('click', () =>{
    navLinks.classList.toggle('show-links');
})