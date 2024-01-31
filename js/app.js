document.addEventListener('DOMContentLoaded', function() {
    let removeElement = document.querySelector('.Load');
    window.addEventListener('load', function() {
        removeElement.remove();
    });
    
});

document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.005}deg;
        `
    })
})

// window.addEventListener('scroll', function () {
//   const scrollPosition = this.window.scrollY;
//   console.log(scrollPosition)
// });
// слежка за видимостью объекта
let observer = new IntersectionObserver(function (enteries) {
  enteries.forEach(function (entry) {
    console.log(entry.target);
    console.log(entry.isIntersecting);
  });
});

let el = document.querySelector('.charpter-1');

observer.observe(el);