let show = document.getElementById("show");
let nav = document.querySelector(".navLinks");
show.onclick = function () {
  show.classList.toggle("fa-times");
  nav.classList.toggle("responsive");
};

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
