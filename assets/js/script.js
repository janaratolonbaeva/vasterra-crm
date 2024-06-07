document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const btnBurger = document.querySelector('.btn-burger');
  const menu = document.querySelector('#menu');
  const navLinks = document.querySelectorAll('#menu a');
  const header = document.querySelector('#header');
  const body = document.querySelector('body');
  const sections = document.querySelectorAll('section');

  btnBurger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });

  navLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (menu.classList.contains('active')) {
        btnBurger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('overflow-hidden');
      }

      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });

      setTimeout(highlightLink, 400);
    });
  });

  function highlightLink() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let selectedLink = null;

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTopRelativeToDocument = currentScrollTop + sectionRect.top;
      const sectionBottomRelativeToDocument = sectionTopRelativeToDocument + sectionRect.height;
      const middleScreen = currentScrollTop + window.innerHeight / 2;
      const hrefLink = section.getAttribute('id');

      if (sectionTopRelativeToDocument < middleScreen && sectionBottomRelativeToDocument > middleScreen) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${hrefLink}`) {
            selectedLink = link;
          }
        });
      }
    });

    if (selectedLink) {
      navLinks.forEach((link) => link.classList.remove('text-primary'));
      selectedLink.classList.add('text-primary');
    } else {
      navLinks.forEach((link) => link.classList.remove('text-primary'));
    }
  }

  window.addEventListener('scroll', highlightLink);

  highlightLink();

  document.querySelector('.dropdown-btn').addEventListener('click', (e) => {
    document.querySelector('.dropdown-content').classList.toggle('show');
    e.currentTarget.classList.toggle('text-primary');
    e.currentTarget.querySelector('svg').classList.toggle('fill-primary');
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
      nextEl: '.swiper-workflow-button-next',
      prevEl: '.swiper-workflow-button-prev',
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

  let swiperModule;

  function initSwiperModule() {
    if (!swiperModule) {
      swiperModule = new Swiper('.swiper-module', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
      });
    }
  }

  function destroySwiperModule() {
    if (swiperModule) {
      swiperModule.destroy(true, true);
      swiperModule = undefined;
    }
  }

  function toggleSwiperModule() {
    if (window.innerWidth <= 768) {
      initSwiperModule();
    } else {
      destroySwiperModule();
    }
  }

  toggleSwiperModule();
  window.addEventListener('resize', toggleSwiperModule);

  let swiperAdvantages;

  function initSwiperAdv() {
    if (!swiperAdvantages) {
      swiperAdvantages = new Swiper('.swiper-advantages', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
      });
    }
  }

  function destroySwiperAdv() {
    if (swiperAdvantages) {
      swiperAdvantages.destroy(true, true);
      swiperAdvantages = undefined;
    }
  }

  function toggleSwiperAdv() {
    if (window.innerWidth <= 768) {
      initSwiperAdv();
    } else {
      destroySwiperAdv();
    }
  }

  toggleSwiperAdv();
  window.addEventListener('resize', toggleSwiperAdv);

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
}
