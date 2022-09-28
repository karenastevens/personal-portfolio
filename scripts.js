const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
