let mobileMenu = document.querySelector('.nav-mobile-menu');
let nav = document.querySelector('.header-nav');
let navCloseBtn = document.querySelector('.nav-close-btn');

mobileMenu.addEventListener('click', function() {
  nav.classList.add('nav-open-nav');
  document.body.classList.add('nav-open-body');
})

navCloseBtn.addEventListener('click', function() {
  nav.classList.remove('nav-open-nav');
  document.body.classList.remove('nav-open-body');
})