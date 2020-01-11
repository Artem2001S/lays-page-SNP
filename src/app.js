import './style/main.scss';

const MENU_ANIMATION_HIDE_DURATION = 400;
const MOBILE_WIDTH = 680;

const checkbox = document.querySelector('#menu-dropper');
const items = Array.from(document.querySelectorAll('.js-nav-item'));
const nav = document.querySelector('#nav');

function hideMenu() {
  items.forEach((el, index) => {
    let className;

    // if need to hide menu
    if (!checkbox.checked) {
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
      }, MENU_ANIMATION_HIDE_DURATION);
    } else {
      nav.style.display = 'block';
    }
  });
}

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  return elemTop < window.innerHeight && elemBottom >= 0;
}

const isMobileVersion = () => window.innerWidth < MOBILE_WIDTH;

checkbox.addEventListener('change', function () {
  if (isMobileVersion()) {
    hideMenu();
  } else {
    checkbox.checked = !checkbox.checked;
  }
});

function animateLaysPromotions() {
  const redBlock = document.querySelector('#lays-promotions_red');
  const balloon = document.querySelector('#lays-promotions_balloon');
  const beach = document.querySelector('#lays-promotions_beach');
  const map = document.querySelector('#lays-promotions_map');

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

// mobile menu
let prevScrollPosition = window.pageYOffset;
const menu = document.querySelector('#menu');
window.addEventListener('scroll', () => {

  // hide mobile menu
  if (isMobileVersion()) {
    const currentScrollPosition = window.pageYOffset;

    if (prevScrollPosition < currentScrollPosition) {
      menu.classList.add('menu_hidden');
      if (checkbox.checked) {
        checkbox.checked = false;
        hideMenu();
      }
    } else {
      menu.classList.remove('menu_hidden');
    }

    prevScrollPosition = window.pageYOffset;
    return;
  }

  animateLaysPromotions();
});
