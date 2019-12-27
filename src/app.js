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

checkbox.addEventListener('change', function () {
  if (window.matchMedia('(max-width: 680px)').matches) {
    hideMenu();
  } else {
    checkbox.checked = !checkbox.checked;
  }
});

function animateLaysPromotions() {
  let doneFirst = false;
  let doneSecond = false;

  const redBlock = document.querySelector('.lays-promotions__item[data-item="red"]');
  const balloon = document.querySelector('.lays-promotions__item[data-item="balloon"]');
  const beach = document.querySelector('.lays-promotions__item[data-item="beach"]');
  const map = document.querySelector('.lays-promotions__item[data-item="map"]');

  const clientBottomFirst = balloon.getBoundingClientRect().top - balloon.getBoundingClientRect().height;
  const clientBottomSecond = map.getBoundingClientRect().top - map.getBoundingClientRect().height;

  if (clientBottomFirst < 0 && doneFirst === false) {
    doneFirst = true;
    redBlock.style.animation = 'show_to-right 1s ease-in-out forwards';
    balloon.style.animation = 'show_to-left 1.2s ease-in forwards';
    balloon.style.zIndex = 1;
  }

  if (clientBottomSecond < 0 && doneSecond === false) {
    doneSecond = true;
    beach.style.animation = 'show_to-right 1.2s ease-in forwards';
    map.style.animation = 'show_to-left 1s ease-in-out forwards';
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

