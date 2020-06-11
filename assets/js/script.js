// ! PARALLAX

const parallax = document.getElementsByClassName("jumbotron")[0];

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgrounPositionY = offset * 0.7 + "px";
});

window.onscroll = function() {
  myFunction();
};

// ! STICKY
const nav = document.getElementById("nav");
const sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
