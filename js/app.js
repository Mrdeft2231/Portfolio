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

let elementHeader = document.querySelector('.header');

let elementChapter = document.getElementById('cp-1');

elementHeader.addEventListener('change', function() {
  
  if(isElementVisible(elementChapter)) {
    elementHeader.disabled = true;
  }
})

function isElementVisible(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 20 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


