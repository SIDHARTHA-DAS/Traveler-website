const navbarI = document.querySelector('.navbar i');
const navLinks = document.querySelector('.nav_links');

navbarI.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
})

