document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const btnBurger = document.querySelector('.btn-burger');
  const menu = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu li a');
  const header = document.querySelector('#header');
  const body = document.querySelector('body');

  btnBurger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        btnBurger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('overflow-hidden');
      }
    });
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

  const tabsOfModules = document.querySelectorAll('#modules .tabs button');
  const contentsOfModules = document.querySelectorAll('#modules .tab-content');
  const tabsOfAdvantages = document.querySelectorAll('#advantages .tabs button');
  const contentsOfAdvantages = document.querySelectorAll('#advantages .tab-content');

  tabHandler(tabsOfModules, contentsOfModules);
  tabHandler(tabsOfAdvantages, contentsOfAdvantages);

  AOS.init();

  matchHeightCard();
  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(matchHeightCard, 100);
  });
});

matchHeightCard();

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

function tabHandler(tabs, contents) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);

      tabs.forEach((t) => t.classList.remove('text-white', 'bg-primary'));
      tabs.forEach((t) => t.classList.add('text-indigo', 'bg-gray'));
      contents.forEach((c) => c.classList.remove('flex'));
      contents.forEach((c) => c.classList.add('hidden'));

      tab.classList.remove('text-indigo', 'bg-gray');
      tab.classList.add('text-white', 'bg-primary');
      target.classList.remove('hidden');
      target.classList.add('flex');
    });
  });

  // const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  // move();
}
