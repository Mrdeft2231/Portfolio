
const elementHeader = document.querySelector(".header");
const elementChapter = document.querySelector(".chapter");
const elementNavigation = document.querySelector(".nav__fixed");


window.addEventListener("scroll", function() {
  if (window.scrollY >= elementChapter.offsetTop) {
    elementHeader.classList.add("hidden");
    elementNavigation.classList.remove("hidden");
    this.document.getElementById("nav__hidden").style.display = "block";


  } else {
    this.document.getElementById("nav__hidden").style.display = "none";
    elementHeader.classList.remove("hidden");
  }
});

const observer = new IntersectionObserver((entries) => {
  if ()
})

const elementImg = document.querySelector(".image-chapter");