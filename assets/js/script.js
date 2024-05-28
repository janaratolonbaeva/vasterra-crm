document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const btnBurger = document.querySelector('.btn-burger');
  const menu = document.querySelector('.menu');
  const header = document.querySelector('#header');
  const body = document.querySelector('body');

  btnBurger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });

  // header scroll
  function updateMenuBackground() {
    const scrollTop = window.scrollY;

    if (scrollTop > 2) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }

  window.addEventListener('scroll', updateMenuBackground);

  new Swiper('#swiper-helps', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-helps-button-next',
      prevEl: '.swiper-helps-button-prev',
    },
  });

  new Swiper('#swiper-metrics', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-metrics-button-next',
      prevEl: '.swiper-metrics-button-prev',
    },
  });

  new Swiper('#swiper-workflow', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-metrics-button-next',
      prevEl: '.swiper-metrics-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const tabs = document.querySelectorAll('.tabs button');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);

      tabs.forEach((t) => t.classList.remove('text-white', 'bg-primary'));
      tabs.forEach((t) => t.classList.add('text-indigo', 'bg-gray'));
      contents.forEach((c) => c.classList.remove('flex'));
      contents.forEach((c) => c.classList.add('hidden'));

      tab.classList.remove('text-indigo', 'bg-gray');
      tab.classList.add('text-white', 'bg-primary');
      target.classList.add('flex');
      target.classList.remove('hidden');
    });
  });

  AOS.init();

  matchHeightCard();
  window.addEventListener('resize', matchHeightCard);
});

function matchHeightCard() {
  const cardTitles = document.querySelectorAll('#swiper-workflow .swiper-slide h3');

  cardTitles.forEach((title) => {
    title.style.height = 'auto';
  });

  if (window.innerWidth >= 992) {
    let maxHeight = 0;

    cardTitles.forEach((title) => {
      if (title.offsetHeight > maxHeight) {
        maxHeight = title.offsetHeight;
      }
    });

    cardTitles.forEach((title) => {
      title.style.height = `${maxHeight}px`;
    });
  }
}
