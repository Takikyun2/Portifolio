const toggleLang = document.querySelector('.languageSelectContainer');
const ptBr = document.querySelector('.ptBr');
const eng = document.querySelector('.eng');


toggleLang.onclick = function () {
  toggleLang.classList.toggle('active');
  ptBr.classList.toggle('active');
  eng.classList.toggle('active');
}

/* about-me */

