document.addEventListener('DOMContentLoaded', () => {

    const heroText = document.querySelector(".overlay-text");
    const mask = document.querySelector(".background");
    const maxScroll = 300;

    window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / maxScroll, 1);

    const scale = 1 - progress * 0.5;
    const opacity = 1 - progress;

    heroText.style.transform = `translate(-50%, -50%) scale(${scale})`;
    heroText.style.opacity = opacity;
    
    const triangleY = 100 - progress * 50;

    mask.style.clipPath = `
      polygon(
        0% 0%, 
        100% 0%, 
        100% ${triangleY}%, 
        50% ${triangleY + 20}%, 
        0% ${triangleY}%)
    `;
})
})

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.header-nav');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

