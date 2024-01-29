const burger = document.querySelector('[data-role="burger"]');
const orderCallExit = document.querySelector('[data-role="orderCall-exit"]');
const burgerClose = document.querySelector('[data-role="burgerClose"]');
const orderCall = document.querySelector('[data-role="orderCall"]');
const menu = document.querySelector('.burger-menu');
const order = document.querySelector('.order-call');

burger.addEventListener('click', () => toogle('burger-menu-open', menu));
burgerClose.addEventListener('click', () => toogle('burger-menu-open', menu));
orderCall.addEventListener('click', () => toogle('order-call-open', order));
orderCallExit.addEventListener('click', () => toogle('order-call-open', order));

function toogle(selector, container) {
  container.classList.toggle(selector);
}
