const expandingBar = document.querySelector(".menu-expanding-bar");
const expandingClose = document.querySelector(".menu-expanding-close");
const menuExpanding = document.querySelector(".menu-expanding");
const article = document.querySelector(".article");
const menuItems = document.querySelector(".menu-item-container")

expandingBar.addEventListener("click",(e) => {
    menuExpanding.classList.add("expanding-rotate");
    article.classList.add("rotated");
    menuItems.classList.add("menu-items-expanded");
    e.preventDefault();
});

expandingClose.addEventListener("click",(e) => {
    menuExpanding.classList.remove("expanding-rotate");
    article.classList.remove("rotated");
    menuItems.classList.remove("menu-items-expanded");
    e.preventDefault();
});

