//start

const openMenu = document.querySelector(".open");
const navList = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".close");
openMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
  navList.classList.remove("active");
});
