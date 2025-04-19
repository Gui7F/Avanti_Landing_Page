import updateCarousel from "./carousel.js"
import updateCarousel2 from "./carousel2.js"
updateCarousel()
updateCarousel2()

import {mouseOnMenuHover} from "./menu-hover.js"
import { mouseOnDeptHover } from "./menu-hover.js"
mouseOnDeptHover()
mouseOnMenuHover()

import { initCarousel } from "./carouselMobile.js"
// event to ensure that the function executes after loading all the html
document.addEventListener("DOMContentLoaded", function() {
    initCarousel()
});

import { initInput } from "./searchInput.js"
initInput();

import { initCarrouselOfer } from "./carouselOfer.js"
const updateCarrouselOfer = initCarrouselOfer()
updateCarrouselOfer()

import { initMenuMobile } from "./menuMobile.js"
initMenuMobile();