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
let initialOptionsSound = new Audio("ASSETS/soundseffects/mixkit-arcade-game-jump-coin.wav");
let telaInicial = document.querySelector(".tela-inicial")

let IdSections = [
    "section-one",
    "section-two",
    "section-three",
    "section-four",
];

initialOptions.forEach((option, index) => {
    option.addEventListener("mouseenter", () => {
        
        initialOptionsSound.play();
    })

    option.addEventListener("click", () => {
        initialOptionsSound.play();
        window.location.href = "#" + IdSections[index];
        telaInicial.style.animation = "saídaTelaInicial 2.5s ease-in-out 1 forwards";
        setTimeout(() => {
            document.body.style.overflow = "unset"
            root.style.scrollBehavior = "smooth";
        }, 2500) //VOLTANDO COM O OVERFLOW QUE FOI TIRADO E COM SCROOL SMOOTH 
    })
});



//SOM INICIAL DA TELA INICIAL
let startSound = new Audio("ASSETS/soundseffects/gameboy-pluck.mp3");

initialOptions.forEach((option) => {
    option.addEventListener("click", () => {
        startSound.currentTime = 0;
        startSound.play();
    })
});


/*-------- HEADER -------------- */

//BACKGROUND SONG

let backgroundSong = new Audio("ASSETS/songs/8-bit-arcade-mode.mp3");
window.addEventListener("click", () => { backgroundSong.play()});
window.addEventListener("touchstart", () => { backgroundSong.play()});
window.addEventListener("keydown", () => { backgroundSong.play()});


// CONTROLE DE VOLUME E PERSONALIZAÇÃO NO HEADER

let volumeControl = document.getElementById("volume");


backgroundSong.volume = 0.3; // Valor padrão da musica
volumeControl.value = 0.3; //Valor padrão da track de volume

volumeControl.addEventListener("input", () => {
    backgroundSong.volume = volumeControl.value;
    root.style.setProperty("--ProgressTrack", volumeControl.value*100 +"%" );

    if(volumeControl < 0.1) {
        backgroundSong.muted = true;
    }
    else {
        backgroundSong.muted = false;
    }
});


let soundIcon = document.querySelector(".song-control-container .hn");

soundIcon.addEventListener("click", () => {
    soundIcon.classList.toggle("hn-sound-on-solid");
    soundIcon.classList.toggle("hn-sound-mute-solid");

    if(soundIcon.classList.contains("hn-sound-mute-solid")) {
        backgroundSong.muted = true;
    }
    else {
        backgroundSong.volume = volumeControl.value;
        backgroundSong.muted = false;
    };

});


//ABRIR E FECHAR MENU HAMBURGUER PARA MOBILE
let headerMenuOptions = document.querySelector("header > .all-menu-options");
let iconMenuHamburguer = document.querySelector(".menuHamburguer");
let iconMenuClose = document.querySelector(".hn-window-close-solid");
let menuHamburguerSound = new Audio("ASSETS/soundseffects/experimental-8-bit-sound-270302.mp3");

iconMenuHamburguer.addEventListener("click", ()=> {
    headerMenuOptions.classList.add("shadow-visible");
    headerMenuOptions.style.transform = "translateX(0)";
    iconMenuHamburguer.style.color = cor02;
    menuHamburguerSound.play();

    
});

iconMenuClose.addEventListener("click", () => {
    headerMenuOptions.classList.remove("shadow-visible");
    headerMenuOptions.style.transform = "translateX(-60vw)";
    iconMenuHamburguer.style.color = cor03;
   
});

//REDIRECIONAMENTO ENTRE SECTIONS AO CLICAR NO LI

//-> idSection da tela inicial utilizado aqui

let headerMenuList = document.querySelectorAll("header ul li"); // All Menu Options
let hoverMenuSoundEffect = new Audio("ASSETS/soundseffects/mixkit-arcade-game-jump-coin.wav"); //Sound effect between menu options
let clickMenuSound = new Audio("ASSETS/soundseffects/gameboy-pluck.mp3") // Sound effect when you click a menu option

headerMenuList.forEach((li, index) => {
    li.addEventListener("click", () => {
        window.location.href = "#" + IdSections[index];
        clickMenuSound.currentTime = 0;
        clickMenuSound.play();
    })
    li.addEventListener("mouseenter", () => {
        hoverMenuSoundEffect.play()})
})



/*-------- SECTION ONE -------------- */

