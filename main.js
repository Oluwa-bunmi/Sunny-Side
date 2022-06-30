let show = document.getElementById("show");
let close = document.getElementById("hide");
let nav = document.querySelector(".navLinks");
show.onclick = function () {
  show.style.display = "none";
  close.style.display = "block";
  nav.style.display = "flex";
};
close.onclick = function () {
  nav.style.display = "none";
  show.style.display = "block";
  close.style.display = "none";
};
