
const elementHeader = document.querySelector(".header");
const elementChapter = document.querySelector(".chapter");

window.addEventListener("scroll", function() {
  if (window.scrollY >= elementChapter.offsetTop) {
    elementHeader.classList.add("hidden");
  } else {
    elementHeader.classList.remove("hidden");
  }
});

$('.image-chapter').ripples({
  resolution: 256,
  dropRadius: 20,
  perturbance: 0.04
});
