// Set element height based on height of reference element

function setHeight() {
  var fullHeight = $(window).innerHeight();
  var shortHeight = $(window).height() * 0.7;

  $('.landing-banner').css('height', fullHeight);
  $('.small-banner').css('height', shortHeight);
}

$(document).ready(function() {
  setHeight();
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight();
});

$(window).on( 'orientationchange', function() {
  setHeight();
});

(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('.main');
  var icon = querySelector('.menu-icon');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
    icon.classList.toggle('x');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
