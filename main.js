let show = document.getElementById("show");
let close = document.getElementById("hide");
let nav = document.querySelector(".navLinks");
show.onclick = function () {
  show.classList.toggle("fa-times");
  // close.style.display = "block";
  // nav.style.display = "flex";
  // nav.style.transition = "10s";
  nav.classList.toggle("responsive");
};
// close.onclick = function () {
//   nav.style.display = "none";
//   show.style.display = "block";
//   close.style.display = "none";
// };

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", () =>{
  loader.style.display = "none";
});
