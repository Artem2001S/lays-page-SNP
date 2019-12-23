import './style/main.scss';

const checkbox = document.querySelector('#menu-dropper');
const items = Array.from(document.querySelectorAll('.nav__item'));
const nav = document.querySelector('.nav');

function hideMenu() {
  items.forEach((el, index) => {
    let className;
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

checkbox.addEventListener('change', function (e) {
  if (window.matchMedia('(max-width: 680px)').matches) {
    hideMenu();
  } else {
    checkbox.checked = !checkbox.checked;
  }
});
