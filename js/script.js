"use strict";

// rs menu animation
var menu = document.querySelector('.header__btn-menu');
var close = document.querySelector('.rs-menu__close');
var rsMenu = document.querySelector('.rs-menu');
var wrapper = document.querySelector('.wrapper');

function listener() {
  document.addEventListener('mousedown', function (event) {
    if (!rsMenu.contains(event.target)) {
      rsMenu.classList.add('rs-menu--close');
    }
  });
}

listener();

menu.onclick = function removeClass() {
  rsMenu.classList.remove('rs-menu--close');
};

close.onclick = function addClass() {
  rsMenu.classList.add('rs-menu--close');
}; // swiper


var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  initialSlide: 1,
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  } // Navigation arrows

}); // mixit up

var mixer = mixitup('.gallery__inner');