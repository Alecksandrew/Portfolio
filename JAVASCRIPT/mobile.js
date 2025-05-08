"use strict";
/*-------- GERAL -------------- */

//CORES
const root = document.documentElement;
const cor01 = getComputedStyle(root).getPropertyValue("--Paleta01");
const cor02 = getComputedStyle(root).getPropertyValue("--Paleta02");
const cor03 = getComputedStyle(root).getPropertyValue("--Paleta03");

/*-------- TELA INICIAL -------------- */

//SOM AO PASSAR SOBRE OPÇÕES INICIAIS E LEVANTAR TELA INICIAL
let initialOptions = document.querySelectorAll(".tela-inicial li");
let initialOptionsSound = new Audio(
  "ASSETS/soundseffects/mixkit-arcade-game-jump-coin.wav"
);
let telaInicial = document.querySelector(".tela-inicial");

let IdSections = [
  "section-one",
  "section-two",
  "section-three",
  "section-four",
];

initialOptions.forEach((option, index) => {
  option.addEventListener("mouseenter", () => {
    initialOptionsSound.play();
  });

  option.addEventListener("click", () => {
    initialOptionsSound.play();
    window.location.href = "#" + IdSections[index];
    telaInicial.style.animation =
      "saídaTelaInicial 2.5s ease-in-out 1 forwards";
    setTimeout(() => {
      document.body.style.overflow = "unset";
      root.style.scrollBehavior = "smooth";
    }, 2500); //VOLTANDO COM O OVERFLOW QUE FOI TIRADO E COM SCROOL SMOOTH
  });
});

//SOM INICIAL DA TELA INICIAL
let startSound = new Audio("ASSETS/soundseffects/gameboy-pluck.mp3");

initialOptions.forEach((option) => {
  option.addEventListener("click", () => {
    startSound.currentTime = 0;
    startSound.play();
  });
});

/*-------- HEADER -------------- */

//BACKGROUND SONG

let backgroundSong = new Audio("ASSETS/songs/8-bit-arcade-mode.mp3");
window.addEventListener("click", () => {
  backgroundSong.play();
});
window.addEventListener("touchstart", () => {
  backgroundSong.play();
});
window.addEventListener("keydown", () => {
  backgroundSong.play();
});

// CONTROLE DE VOLUME E PERSONALIZAÇÃO NO HEADER

let volumeControl = document.getElementById("volume");
let volumeMutedOrNot;

backgroundSong.loop = true;
backgroundSong.volume = 0.3; // Valor padrão da musica
volumeControl.value = 0.3; //Valor padrão da track de volume

volumeControl.addEventListener("input", () => {
  volumeMutedOrNot = volumeControl.value;
  root.style.setProperty("--ProgressTrack", volumeControl.value * 100 + "%");

  if (!backgroundSong.muted) {
    backgroundSong.volume = volumeMutedOrNot;
  }
});

//TROCAR ICONE PARA MUTADO DESMUTADO NO HEADER
let soundIcon = document.querySelector(".song-control-container .hn");

soundIcon.addEventListener("click", () => {
  soundIcon.classList.toggle("hn-sound-on-solid");
  soundIcon.classList.toggle("hn-sound-mute-solid");

  if (soundIcon.classList.contains("hn-sound-mute-solid")) {
    backgroundSong.muted = true;
  } else {
    backgroundSong.muted = false;
    backgroundSong.volume = volumeMutedOrNot;
  }
});

//ABRIR E FECHAR MENU HAMBURGUER PARA MOBILE
let headerMenuOptions = document.querySelector("header > .all-menu-options");
let iconMenuHamburguer = document.querySelector(".menuHamburguer");
let iconMenuClose = document.querySelector(".hn-window-close-solid");

let menuHamburguerSound = new Audio(
  "ASSETS/soundseffects/experimental-8-bit-sound-270302.mp3"
);
let menuCloseSound = new Audio(
  "ASSETS/soundseffects/experimental-8-bit-sound-270302-reversed-edited.mp3"
);

menuHamburguerSound.volume = 0.5;
menuHamburguerSound.playbackRate = 0.8;
menuCloseSound.volume = 0.5;
menuCloseSound.playbackRate = 0.8;

iconMenuHamburguer.addEventListener("click", () => {
  headerMenuOptions.classList.add("shadow-visible");
  headerMenuOptions.style.transform = "translateX(0)";
  iconMenuHamburguer.style.color = cor02;
  menuHamburguerSound.play();
});

iconMenuClose.addEventListener("click", () => {
  headerMenuOptions.classList.remove("shadow-visible");
  headerMenuOptions.style.transform = "translateX(-60vw)";
  iconMenuHamburguer.style.color = cor03;
  menuCloseSound.play();
});

//REDIRECIONAMENTO ENTRE SECTIONS AO CLICAR NO LI

//-> idSection da tela inicial utilizado aqui

let headerMenuList = document.querySelectorAll("header ul li"); // All Menu Options
let hoverMenuSoundEffect = new Audio(
  "ASSETS/soundseffects/mixkit-arcade-game-jump-coin.wav"
); //Sound effect between menu options
let clickMenuSound = new Audio("ASSETS/soundseffects/gameboy-pluck.mp3"); // Sound effect when you click a menu option

hoverMenuSoundEffect.volume = 0.8;
clickMenuSound.volume = 0.8;

headerMenuList.forEach((li, index) => {
  li.addEventListener("click", () => {
    window.location.href = "#" + IdSections[index];
    clickMenuSound.currentTime = 0;
    clickMenuSound.play();
  });
  li.addEventListener("mouseenter", () => {
    hoverMenuSoundEffect.play();
  });
});

/*-------- SECTION ONE -------------- */

//REDES SOCIAIS CLICÁVEIS
function socialIconClick (icon, externalLink, target) {
    icon.addEventListener("click", () => {
        window.open(externalLink, target);
    });
};

let githubS1 = document.querySelector("#section-one .hn.hn-github").parentNode; //RETORNANDO PAI PARA MANIPULAR CLICK MELHOR CSS
let linkedinS1 = document.querySelector("#section-one .hn.hn-linkedin").parentNode;

socialIconClick(githubS1, "https://github.com/Alecksandrew", "_blank");
socialIconClick(linkedinS1, "https://www.linkedin.com/in/alecksandrew/", "_blank");


/*-------- SECTION TWO -------------- */

let skillSound = new Audio("ASSETS/soundseffects/retro-coin.mp3");
let skillsIcons = document.querySelectorAll(".icon-text");

skillSound.volume = 0.25;

skillsIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    skillSound.currentTime = 0;
    skillSound.play();
  });
});


/*-------- SECTION THREE -------------- */

//BOTÕES DO CARD DE PROJETOS
let linksForProjects = [
    {codigo:"https://github.com/Alecksandrew/Game-store", deploy:"https://alecksandrew.github.io/Game-store/"},
    {codigo:"BOTAO DE CODIGO CARD2", deploy:"BOTAO DE DEPLOY CARD2"},
    {codigo:"BOTAO DE CODIGO CARD3", deploy:"BOTAO DE DEPLOY CARD3"},
    {codigo:"BOTAO DE CODIGO CARD4", deploy:"BOTAO DE DEPLOY CARD4"},
];
//CARD 1
let infoAboutAllCards = document.querySelectorAll(".info-about-project");

infoAboutAllCards.forEach((info, index) => {
   
    info.querySelector(".code-button").addEventListener("click", () => {
        window.open(linksForProjects[index].codigo, "_blank");
    });

    info.querySelector(".deploy-button").addEventListener("click", () => {
        window.open(linksForProjects[index].deploy, "_blank");
    });
    
    
    /*let allButtons = info.querySelectorAll("button");
    
    allButtons[0].addEventListener("click", () => {
        window.open(linksForProjects[index].codigo, "_blank")
    })
    allButtons[1].addEventListener("click", () => {
        window.open(linksForProjects[index].deploy, "_blank")
    }); */
});


/*-------- SECTION FOUR -------------- */

let githubS4 = document.querySelector("#section-four .hn.hn-github").parentNode; //RETORNANDO PAI PARA MANIPULAR CLICK MELHOR CSS
let linkedinS4 = document.querySelector("#section-four .hn.hn-linkedin").parentNode;

socialIconClick(githubS4, "https://github.com/Alecksandrew", "_blank");
socialIconClick(linkedinS4, "https://www.linkedin.com/in/alecksandrew/", "_blank");