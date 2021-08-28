/* Slide */
var index = 0;
slide();
function slide() {
  let slideList = document.querySelectorAll(".banner-content");
  slideList.forEach((e) => (e.style.display = "none"));
  index++;
  if (index >= slideList.length) index = 0;
  slideList[index].style.display = "block";
  setTimeout(slide, 4000);
}
/* Header */
const menubar = document.querySelector(".header-menubar");
const menuMobile = document.querySelector(".menumb");
const listMenuMobile = document.querySelectorAll(".menumb-link");
menubar.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
});
listMenuMobile.forEach((e) => {
  e.addEventListener("click", () => {
    if (menubar) menuMobile.classList.remove("show");
  });
});
/* Tickets */
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-close");
const modalCloseButton = document.querySelector(".btn-close");
const btnTour = document.querySelectorAll(".tour-btn");

btnTour.forEach((e) => {
  e.addEventListener("click", () => {
    modalContainer.classList.add("active");
    modal.style.zIndex = 2;
    modal.style.background = "rgba(0, 0, 0, 0.7)";
  });
});
const tickets = () => {
  modalContainer.classList.remove("active");
  modal.style.zIndex = -2;
  modal.style.background = "transparent";
};
modalClose.addEventListener("click", tickets);
modalCloseButton.addEventListener("click", tickets);
modal.addEventListener("click", tickets);
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation(); 
});
