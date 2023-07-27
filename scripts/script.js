"use strict";
const navBar = document.getElementById("navBar");
navBar.style.borderBottom = "none";
window.addEventListener("scroll", function () {
  let touchContainer = document.getElementById("touch-container");
  const navBar = document.getElementById("navBar");
  let scrollPosition = window.scrollY;
  let containerTop = touchContainer.offsetTop;
  let containerHeight = touchContainer.offsetHeight;

  if (scrollPosition >= containerTop) {
    navBar.style.borderBottom = "2px solid #dcdddc";
  } else {
    navBar.style.borderBottom = "none";
  }
});
