const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  if (getComputedStyle(menu).display === "none") {
    menu.style.display = "flex";
    menuIcon.style.opacity = "0.6";
  } else {
    menu.style.display = "none";
    menuIcon.style.opacity = "1";
  }
});
