/* seletor de tema */

const toggle = document.querySelector('.themeSelectContainer');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('body');
const headerContainer = document.querySelector('.headerContainer');

/* move bar */

const moveBarContainer = document.querySelector('.moveBarContainer');

/* seletor de linguagem */

const languageSelectContainer = document.querySelector('.languageSelectContainer');

/* about me */

const aboutMe = document.querySelector('.aboutMe');
const aboutMeTitle = document.querySelector('.aboutMeTitle');
const javascript = document.querySelector('.javascript');
const github = document.querySelector('.github');

/* projects */

const projects = document.querySelector('.projects');
const projectCard = document.querySelectorAll('.projectCard');
const projectsText = document.querySelectorAll('.projectsText');
const githubLink = document.querySelectorAll('.githubLink');
const projectTittle = document.querySelectorAll('.projectTittle');

/* contact */

const contact = document.querySelector('.contact');
const instagram = document.querySelector('.instagram');
const githubContact = document.querySelector('.githubContact');

toggle.onclick = function () {

  /* seletor de tema */

  toggle.classList.toggle('darkMode');
  body.classList.toggle('darkMode');
  moon.classList.toggle('darkMode');
  sun.classList.toggle('darkMode');
  headerContainer.classList.toggle('darkMode');

  /* seletor de linguagem */

  languageSelectContainer.classList.toggle('darkMode');

  /* move bar */

  moveBarContainer.classList.toggle('darkMode');

  /* about me */

  aboutMe.classList.toggle('darkMode');
  aboutMeTitle.classList.toggle('darkMode');
  javascript.classList.toggle('darkMode');
  github.classList.toggle('darkMode');

  /* projects */

  projects.classList.toggle('darkMode');

  projectCard.forEach(card => {
    card.classList.toggle('darkMode');
  });

  projectsText.forEach(text => {
    text.classList.toggle('darkMode');
  });

  githubLink.forEach(link => {
    link.classList.toggle('darkMode');
  });

  projectTittle.forEach(title => {
    title.classList.toggle('darkMode');
  });

  /* contact */

  contact.classList.toggle('darkMode');
  instagram.classList.toggle('darkMode');
  githubContact.classList.toggle('darkMode');
}