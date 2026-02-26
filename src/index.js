//Import CSS
import "./styles.css";

//initial import of pageLoad function and call immediately.
import { pageLoad } from "./homepage-load.js";
pageLoad();

import { menuLoad } from "./menu-load.js";
import { contactLoad } from "./contact-load.js";


const contentDiv = document.getElementById("content");

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", ()=>{
    contentDiv.innerHTML = "";
    pageLoad();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () =>{
    contentDiv.innerHTML = "";    
    menuLoad();
});

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () =>{
    contentDiv.innerHTML = "";
    contactLoad();
});




//to-do:
//Fixes:
//Import fonts and add them to the text on the pages.
//Make the menu, specifically the content div responsive