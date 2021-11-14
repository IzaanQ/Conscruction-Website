const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-items');
    const navLinks = document.querySelectorAll('.nav-items li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menu.classList.toggle('toggle'); 

    });
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });



}

navSlide();