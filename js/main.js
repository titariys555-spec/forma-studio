const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const swiper = new Swiper('.project__slider', {
  loop: true,
  observer: true,
  observeParents: true,
  spaceBetween: 20,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.projects__arrow-right',
    prevEl: '.projects__arrow-left',
  },

});