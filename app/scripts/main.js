'use strict';

// Set element height based on height of reference element

function setHeight() {
  var shortHeight = $(window).height() * 0.8;

  $('.landing-banner').css('height', shortHeight);
  $('.small-banner').css('height', shortHeight);
}

(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var container = querySelector('.menu-container');
  var menuBtn = querySelector('.menu');
  var main = querySelector('.main');
  var icon = querySelector('.menu-icon');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
    container.classList.remove('open');
    icon.classList.remove('x');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    // navdrawerContainer.classList.add('opened');
    container.classList.toggle('open');
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

$(document).ready(function() {
  setHeight();
  $('.main').fitVids();
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight();
});

$(window).on( 'orientationchange', function() {
  setHeight();
});
