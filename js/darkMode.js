/* constantes */

const elements = document.querySelectorAll('body, .moon, .sun, .headerContainer, .languageSelectContainer, .moveBarContainer, .aboutMe, .aboutMeTitle, .javascript, .github, .projects, .contact, .instagram, .githubContact');

/* seletor de temas */
const toggle = document.querySelector('.themeSelectContainer');


/* constantes da parte projects */

const projectCards = document.querySelectorAll('.projectCard');
const projectTexts = document.querySelectorAll('.projectsText');
const githubLinks = document.querySelectorAll('.githubLink');
const projectTitles = document.querySelectorAll('.projectTittle');

/* função que aplica o dark mode */

toggle.onclick = function () {
  elements.forEach(element => element.classList.toggle('darkMode'));

  toggle.classList.toggle('darkMode');

  projectCards.forEach(card => card.classList.toggle('darkMode'));
  projectTexts.forEach(text => text.classList.toggle('darkMode'));
  githubLinks.forEach(link => link.classList.toggle('darkMode'));
  projectTitles.forEach(title => title.classList.toggle('darkMode'));
};






