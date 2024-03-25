
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


 const ainimateObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target = document.querySelector('.description').style.display = "block";
      entry.target = document.querySelector('.image-chapter').style.display = "flex";
     }
  })   
 },
 {
   threshold: 0.5
 });

let target = document.querySelector('.chapter__main');
target = ainimateObserver.observe(target);

const animateAboutTheSite = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target = document.querySelector('.gif').style.display = "block";
      entry.target = document.querySelector('.AboutTheSite__text').style.display = "flex";
     }
  })
}, {
  threshold: 0.5
})

animateAboutTheSite.observe(document.querySelector('.AboutTheSite'))
