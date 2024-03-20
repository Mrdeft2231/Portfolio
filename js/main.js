
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

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Если элемент видим, добавить класс или стили для анимации
      entry.target.classList.add('.animation-block');
    } else {
      // Если элемент скрыт, удалить класс или стили анимации
      entry.target.classList.remove('.animation-block');
    }
  });
}, { threshold: 0.5 }); // Установка порога видимости в 0.5

// Получение целевого элемента
const targetElement = document.querySelector('.description');

// Привязка наблюдателя к целевому элементу
observer.observe(targetElement);