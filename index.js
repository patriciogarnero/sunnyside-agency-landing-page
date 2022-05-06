const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menu.style.display = "none";

menuIcon.addEventListener("click", () => {
  if (menu.style.display === "none") {
    console.log("click");
    menu.style.display = "flex";
  } else if (menu.style.display === "flex") {
    console.log("other click");
    menu.style.display = "none";
  }
});
