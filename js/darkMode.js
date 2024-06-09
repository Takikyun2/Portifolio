const toggle = document.querySelector('.themeSelectContainer');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('body');

toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  moon.classList.toggle('active');
  sun.classList.toggle('active');
}