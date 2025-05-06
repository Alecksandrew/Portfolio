"use strict";
//CORES
const root = document.documentElement;
const cor01 = getComputedStyle(root).getPropertyValue("--Paleta01");
const cor02 = getComputedStyle(root).getPropertyValue("--Paleta02");
const cor03 = getComputedStyle(root).getPropertyValue("--Paleta03");

let headerMenuOptions = document.querySelector("header > .all-menu-options");
let iconMenuHamburguer = document.querySelector(".menuHamburguer");
let iconMenuClose = document.querySelector(".hn-window-close-solid");

iconMenuHamburguer.addEventListener("click", ()=> {
    headerMenuOptions.classList.add("shadow-visible");
    headerMenuOptions.style.transform = "translateX(0)";
    iconMenuHamburguer.style.color = cor02;

    
});

iconMenuClose.addEventListener("click", () => {
    headerMenuOptions.classList.remove("shadow-visible");
    headerMenuOptions.style.transform = "translateX(-60vw)";
    iconMenuHamburguer.style.color = cor03;
   
});