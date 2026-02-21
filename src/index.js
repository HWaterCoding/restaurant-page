console.log("Test")

//initial import of pageLoad function and call immediately.
import { pageLoad } from "./homepage-load.js";
pageLoad();

import { menuLoad } from "./menu-load.js";
import { contactLoad } from "./contact-load.js";

//Import the funcitons from the other 3 files first and then call them accordingly
//in the event listeners for each tab-switching button.


//This will be the main file that controls tab-switching logic. 

//This file will simply add event listeners to the three tab buttons

//When one button is clicked it will wipe out the content current on the page and then
//it will run the corresponding tab module to replace the content with what was clicked.

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", pageLoad);



const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", menuLoad);

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", contactLoad);



