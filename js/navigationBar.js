const marker = document.querySelector('.marker');
const item = document.querySelectorAll('.item');
function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
  link.addEventListener('click', (e) => {
    indicator(e.target);
  });
});

/* seções do site */

const aboutMeContainer = document.querySelector('.aboutMeContainer');
const projectsContainer = document.querySelector('.projectsContainer');
const contactContainer = document.querySelector('.contactContainer');

/* botoes do move bar */
const aboutMePage = document.querySelector('.aboutMePage');
const projectsPage = document.querySelector('.projectsPage');
const contactPage = document.querySelector('.contactPage');


aboutMePage.addEventListener('click', () => {
  aboutMeContainer.style.display = "flex";
  projectsContainer.style.display = "none";
  contactContainer.style.display = "none";

})

projectsPage.addEventListener('click', () => {
  aboutMeContainer.style.display = "none";
  projectsContainer.style.display = "flex";
  contactContainer.style.display = "none";

})

contactPage.addEventListener('click', () => {
  aboutMeContainer.style.display = "none";
  projectsContainer.style.display = "none";
  contactContainer.style.display = "flex";

})
