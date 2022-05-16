const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  if (getComputedStyle(menu).display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
