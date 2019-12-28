import './style/main.scss';

const checkbox = document.querySelector('#menu-dropper');
const items = Array.from(document.querySelectorAll('.nav__item'));
const nav = document.querySelector('.nav');

function hideMenu() {
  items.forEach((el, index) => {
    let className;
    // if need to hide menu
    if (checkbox.checked === false) {
      if (index % 2 !== 0) {
        className = 'animate-right_hide'
      } else {
        className = 'animate-left_hide'
      }

      el.classList.add(className);

      nav.style.display = 'block';
      setTimeout(() => {
        nav.style.display = 'none';
        el.classList.remove(className);
      }, 400);
    } else {
      nav.style.display = 'block';
    }
  });
}

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

checkbox.addEventListener('change', function () {
  if (window.matchMedia('(max-width: 680px)').matches) {
    hideMenu();
  } else {
    checkbox.checked = !checkbox.checked;
  }
});

function animateLaysPromotions() {
  const redBlock = document.querySelector('.lays-promotions__item[data-item="red"]');
  const balloon = document.querySelector('.lays-promotions__item[data-item="balloon"]');
  const beach = document.querySelector('.lays-promotions__item[data-item="beach"]');
  const map = document.querySelector('.lays-promotions__item[data-item="map"]');

  if (isScrolledIntoView(redBlock)) {
    redBlock.style.animation = 'show_to-right 1s ease forwards';
    balloon.style.animation = 'show_to-left 1s ease forwards';
    balloon.style.zIndex = 1;
  }

  if (isScrolledIntoView(map)) {
    beach.style.animation = 'show_to-right 1s ease forwards';
    map.style.animation = 'show_to-left 1s ease forwards';
  }
}

animateLaysPromotions();

let prevScrollPosition = window.pageYOffset;
const menu = document.querySelector('.menu');
window.addEventListener('scroll', () => {
  // hide menu
  if (window.matchMedia('(max-width: 680px)').matches) {
    const currentScrollPosition = window.pageYOffset;

    if (prevScrollPosition < currentScrollPosition) {
      menu.style.top = '-80px';
      if (checkbox.checked) {
        checkbox.checked = false;
        hideMenu();
      }
    } else {
      menu.style.top = '0';
    }

    prevScrollPosition = window.pageYOffset;
    return;
  }
  animateLaysPromotions();
});

