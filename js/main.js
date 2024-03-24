
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

let options = {
  threshold: [0.5]
};

 const ainimateObserver = new IntersectionObserver((entries, observer) => {
  console.log(observer)
  console.log("вижу объект")
 },
 {
   threshold: 0.5
 }
 )

let target = document.querySelector(".chapter__main");
target = ainimateObserver.observe(target)
let textChapter = document.querySelector('.chapter__text');
let imgChapter = document.querySelector('.chapter__image');