/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');
  const navLinks = document.querySelectorAll('.main-nav__link');

  const onOpenMenu = () => {
    document.querySelector('body').classList.add('modal__open');
    document.querySelector('body').classList.add('modal__overlay');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  };

  function onCloseMenu() {
    document.querySelector('body').classList.remove('modal__open');
    document.querySelector('body').classList.remove('modal__overlay');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      onOpenMenu();
    } else {
      onCloseMenu();
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', onCloseMenu);
  });

  window.addEventListener('click', function (evt) {
    if (!evt.target.closest('.main-nav')) {
      onCloseMenu();
    }
  });

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
