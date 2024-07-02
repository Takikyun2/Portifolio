/* variavel do toggle e dados das linguagens */

const toggleLang = document.querySelector('.languageSelectContainer');

const data = {

  "pt":
  {

    /* about me */

    "aboutMeTitlePt": "Ola meu nome é Clayton",

    "aboutMeContentPt": "Trago comigo a paixão por construir pontes no mundo digital. No momento, dedico-me integralmente aos estudos em desenvolvimento web fullstack. A cada dia, busco novos desafios e oportunidades para colocar em prática o que aprendo, aprimorando minhas habilidades e expandindo meus horizontes.",

    "aboutMeContent2Pt": "Minha jornada é marcada por projetos práticos que me conectam com a realidade do mercado, desde o desenvolvimento de uma plataforma web para uma clínica de psicologia até a criação de uma plataforma de vídeos.",

    "tecnologiasTitlePt": "Tecnologias",

    /* projects */

    /* musicPlayer */

    "musicPlayerContent": "Este projeto didático em JavaScript teve como objetivo principal aprimorar minha lógica de programação. Apesar da simplicidade do projeto, ele me proporcionou um aprendizado significativo sobre a linguagem e suas diversas funcionalidades. Através de pesquisas em sites e no YouTube, explorei diversas técnicas e conceitos que antes me eram desconhecidos. Essa jornada de aprendizado me permitiu desenvolver habilidades cruciais para um programador, como a pesquisa eficaz de informações e a resolução de problemas de forma criativa. O projeto me proporcionou um crescimento notável em minha capacidade de pesquisa e resolução de problemas. Aprendi a buscar informações de maneira eficiente e a aplicar meus conhecimentos em JavaScript para superar desafios e alcançar meus objetivos.",

    /* gerenciador */

    "gerenciadorTitle": "Gerenciador de Tarefas",

    "gerenciadorContent": "Com o objetivo de aprimorar minha lógica de programação e aprofundar meus conhecimentos em JavaScript, embarquei em um projeto didático de grande relevância: o projeto do Matheus Battisti. Essa jornada representou um marco em minha trajetória como programador, pois foi meu primeiro contato com a linguagem JavaScript e as bases para meu aprendizado subsequente. O projeto me proporcionou uma imersão profunda nos fundamentos do JavaScript, permitindo que eu consolidasse conceitos essenciais para a programação. Através da prática e da experimentação, desenvolvi habilidades como resolução de problemas, pensamento lógico e organização de código. Este projeto didático foi um divisor de águas em minha jornada como programador. As primeiras noções que obtive com o JavaScript me abriram portas para um universo de possibilidades e me motivaram a continuar explorando e me aprofundando na linguagem. Agradeço ao Matheus Battisti por compartilhar seu conhecimento e por me proporcionar essa experiência transformadora.",

    /* anitube */

    "anitubeTitle": "Anitube",

    "anitubeContent": "O Anitube, meu último projeto finalizado, foi um marco em minha jornada de aprendizado. Através dele, tive a oportunidade de dominar as operações básicas de CRUD (Criar, Ler, Atualizar, Excluir) em bancos de dados, além de aprofundar meus conhecimentos em consultas para sistemas de pesquisa. O projeto Anitube se destacou por sua abrangência. Explorei diversas funcionalidades, desde a criação de um sistema de login e autenticação até a implementação de buscas eficientes e intuitivas. A experiência me permitiu vivenciar os desafios e as recompensas do desenvolvimento de um sistema completo. O Anitube representou um aprendizado significativo e um passo importante em minha trajetória como programador. A experiência me proporcionou autonomia, confiança e a capacidade de enfrentar desafios complexos com criatividade e soluções inovadoras. Agradeço a todos que me apoiaram nesta jornada e me incentivaram a buscar novos conhecimentos.",

    "aboutMePage": "Sobre mim",

    "projectsPage": "Projetos",

    "contactPage": "Contato",
  },


  "eng":
  {

    /* about me */

    "aboutMeTitleEng": "Hello my name is Clayton",

    "aboutMeContentEng": "I bring with me a passion for build bridges in the digital world. At the moment, I dedicate myself fully to development studies fullstackweb. Every day, I seek new challenges and opportunities for put into practice what I learn, improving my skills It is expanding my horizons.",

    "aboutMeContent2Eng": "My journey is marked by practical projects that connect me with The market reality, from the development of a platform web for a psychology clinic until the creation of a platform of videos.",

    "tecnologiasTitleEng": "Technologies",

    /* projects */

    /* musicPlayer */

    "musicPlayerContent": "This didactic project in JavaScript aimed to main improve my programming logic. Despite the simplicity of the project, it provided me with learning significant about language and its various functionalities. Through research on websites and YouTube, I explored miscellaneous techniques and concepts that were previously unknown to me. That learning journey allowed me to develop skills crucial for a programmer, such as effective search for information and creative problem solving. The project provided me with notable growth in my research and problem-solving skills. I learned to seek information efficiently and apply my JavaScript knowledge to overcome challenges and achieve my goals.",

    /* gerenciador */

    "gerenciadorTitle": "Gerenciador de Tarefas",

    "gerenciadorContent": "With the aim of improving my programming logic and deepening my knowledge of JavaScript, I embarked on a teaching project of great relevance: Matheus Battisti's project. This journey represented a milestone in my career as a programmer, as it was my first contact with the JavaScript language and the basis for my subsequent learning. The project provided me with a deep dive into the fundamentals of JavaScript, allowing me to consolidate essential concepts for programming. Through practice and experimentation, I developed skills such as problem solving, logical thinking, and code organization. This educational project was a turning point in my journey as a programmer. The first notions I gained with JavaScript opened doors to a universe of possibilities and motivated me to continue exploring and delving deeper into the language. I thank Matheus Battisti for sharing his knowledge and providing me with this transformative experience.",

    /* anitube */

    "anitubeTitle": "Anitube",

    "anitubeContent": "Anitube, my last completed project, was a milestone in my learning journey. Through him, I had the opportunity to master basic CRUD operations (Create, Read, Update, Delete) in databases, in addition to deepen my knowledge in queries for systems search. The Anitube project stood out for its scope. I explored various functionalities, from the creation of a login and authentication until the implementation of searches efficient and intuitive. The experience allowed me to experience the challenges and the rewards of developing a complete system. Anitube represented a significant learning experience and a step important in my career as a programmer. A experience gave me autonomy, confidence and the ability to face complex challenges with creativity and solutions innovative. I thank everyone who supported me on this journey and encouraged me to seek new knowledge.",

    "aboutMePage": "About me",

    "projectsPage": "Projects",

    "contactPage": "Contact",
  }
}

/* variaveis dos textos */

const aboutMeTitle = document.querySelector('.aboutMeTitle');
const aboutMeContent = document.querySelector('.aboutMeContent');
const aboutMeContent2 = document.querySelector('.aboutMeContent2');
const tecnologiasTitle = document.querySelector('.tecnologiasTitle');

const musicPlayerContent = document.querySelector('.musicPlayerContent');
const gerenciadorTitle = document.querySelector('.gerenciadorTitle');
const gerenciadorContent = document.querySelector('.gerenciadorContent');
const anitubeTitle = document.querySelector('.anitubeTitle');
const anitubeContent = document.querySelector('.anitubeContent');

/* função para alterar o idioma */

function changeLanguage() {
  toggleLang.classList.toggle('active')

  if (toggleLang.classList.contains('active')) {
    aboutMeTitle.textContent = data.eng.aboutMeTitleEng;
    aboutMeContent.textContent = data.eng.aboutMeContentEng;
    aboutMeContent2.textContent = data.eng.aboutMeContent2Eng;
    tecnologiasTitle.textContent = data.eng.tecnologiasTitleEng;
    musicPlayerContent.textContent = data.eng.musicPlayerContent;
    gerenciadorTitle.textContent = data.eng.gerenciadorTitle;
    gerenciadorContent.textContent = data.eng.gerenciadorContent;
    anitubeTitle.textContent = data.eng.anitubeTitle;
    anitubeContent.textContent = data.eng.anitubeContent;
    aboutMePage.textContent = data.eng.aboutMePage;
    projectsPage.textContent = data.eng.projectsPage;
    contactPage.textContent = data.eng.contactPage;
  } else {
    aboutMeTitle.textContent = data.pt.aboutMeTitlePt;
    aboutMeContent.textContent = data.pt.aboutMeContentPt;
    aboutMeContent2.textContent = data.pt.aboutMeContent2Pt;
    tecnologiasTitle.textContent = data.pt.tecnologiasTitlePt;
    musicPlayerContent.textContent = data.pt.musicPlayerContent;
    gerenciadorTitle.textContent = data.pt.gerenciadorTitle;
    gerenciadorContent.textContent = data.pt.gerenciadorContent;
    anitubeTitle.textContent = data.pt.anitubeTitle;
    anitubeContent.textContent = data.pt.anitubeContent;
    aboutMePage.textContent = data.pt.aboutMePage;
    projectsPage.textContent = data.pt.projectsPage;
    contactPage.textContent = data.pt.contactPage;

  }
}

/* chamando a funçao no clique */

toggleLang.onclick = () =>
  changeLanguage();
;
