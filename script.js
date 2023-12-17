var menuBtn = document.querySelector('.hamburger-btn');
var navbarLinksContainer = document.querySelector('.navlinks');
var navbarLinks = document.querySelectorAll('.navlinks li a');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menuBtn.classList.toggle('active');
    navbarLinksContainer.classList.toggle('active');
}



for(var i = 0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener('click', toggleMenu);
}

const checkbox = document.getElementById('darkmode__toggle');
const body = document.querySelector('body');
const websiteContainer = document.querySelector('.website__container');
const heroText = document.querySelector('.hero__container .hero__container_text h1');
const heroParagraph = document.querySelector('.hero__container .hero__container_text p');
const locationText = document.querySelector('.hero__container_text .location__container .location__text ');

checkbox.onclick= function(){
    checkbox.classList.toggle('active')
    body.classList.toggle('active')
    websiteContainer.classList.toggle('active')
    heroText.classList.toggle('active')
    heroParagraph.classList.toggle('active')
    locationText.classList.toggle('active')
}

window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
