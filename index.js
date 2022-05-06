const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menu.style.display = "none";

menuIcon.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
});
