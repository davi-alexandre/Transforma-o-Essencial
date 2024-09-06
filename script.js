'use strict';

/*ANIMATION*/
ScrollReveal().reveal('header, figure, img, .has-bg-image', {
  duration: 1000,
});

ScrollReveal().reveal('h1, h2, h3', {
  distance: '50px',
  origin: 'top',
  duration: 2000,
})

ScrollReveal().reveal('p, .contact-list', {
  distance: '50px',
  origin: 'left',
  duration: 3000,
});

ScrollReveal().reveal('.li-offers, .image-list', {
  distance: '50px',
  origin: 'bottom',
  duration: 3000,
});



/*Adicionar evento ao Nav (Mostrar - Ocultar)*/
const addEventOnElem = function (elem, type, callback) {
  /*Se for uma lista: */
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
    /*Se for um elemento: */
  } else {
    elem.addEventListener(type, callback)
  }
}

const navToggler = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  navToggler.classList.toggle('active');
}

addEventOnElem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove('active');
  navToggler.classList.remove('active');
}

addEventOnElem(navbarLinks, 'click', closeNavbar);

/*botão home ativo quando o usuário rola a tela para baixo*/
const backTopBtn = document.querySelector("[data-back-top-btn]")
const header = document.querySelector("[data-header]")

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
}

addEventOnElem(window, 'scroll', activeElemOnScroll);


/*GALLERY*/
function selectImage(src, targetId) {
  const target = document.getElementById(targetId);
  target.classList.add('fade');
  setTimeout(() => {
    target.src = src;
    target.classList.remove('fade');
  }, 300);
}