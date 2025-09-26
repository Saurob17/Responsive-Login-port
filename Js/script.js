const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignUpLink = document.querySelectorAll(".form-box .bottom-link a");

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".links .close-btn");
const navLinks = document.querySelector(".navbar .links");


menuBtn.addEventListener("click", () => {
  navLinks.classList.add("show-menu");
});

 
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show-menu");
});


showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignUpLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});
