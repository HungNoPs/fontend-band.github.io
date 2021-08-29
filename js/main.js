/* Slide Basic */
var index = 0;
(function slide() {
  let slideList = document.querySelectorAll(".banner-content");
  slideList.forEach((e) => (e.style.display = "none"));
  index++;
  if (index >= slideList.length) index = 0;
  slideList[index].style.display = "block";
  setTimeout(slide, 4000);
})();

/* Header && Menu Mobile */
const menubar = document.querySelector(".header-menubar");
const menuMobile = document.querySelector(".menumb");
const listMenuMobile = document.querySelectorAll(".menumb-link");
const home = document.querySelector(".menu-link");

// show menubar
menubar.addEventListener("click", () => menuMobile.classList.toggle("show"));

// remove menubar
const removeMenu = () => menuMobile.classList.remove("show");
home.addEventListener("click", removeMenu);
listMenuMobile.forEach((e) => e.addEventListener("click", removeMenu));

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

// function remove Tickets
const tickets = () => {
  modalContainer.classList.remove("active");
  modal.style.zIndex = -2;
  modal.style.background = "transparent";
};

//remove tickets from
modalClose.addEventListener("click", tickets);
modalCloseButton.addEventListener("click", tickets);
modal.addEventListener("click", tickets);
modalContainer.addEventListener("click", (e) => e.stopPropagation());
/* ------------------------ */
