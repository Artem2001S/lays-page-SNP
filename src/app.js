import './style/main.scss';

const checkbox = document.querySelector('#menu-dropper');
const items = Array.from(document.querySelectorAll('.nav__item'));
const nav = document.querySelector('.nav');

checkbox.addEventListener('change', function (e) {
  items.forEach((el, index) => {
    if (checkbox.checked === false) {
      if (index % 2 !== 0) {
        el.classList.add('animate-right_hide');
      } else {
        el.classList.add('animate-left_hide');
      }
      nav.style.display = 'block';
      setTimeout(() => {
        nav.style.display = 'none';
      }, 400);
    } else {
      nav.style.display = 'block';
    }
  });
});
