const inputs = document.querySelectorAll('.order-call__input');
const sendOrder = document.querySelector('[data-role="sendOrder"]');
const success = document.querySelector('.order-success');

sendOrder.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value == 0) {
      input.classList.add('order-call__input_error');
    } else if (input.classList.contains('order-call__input_error')) {
      input.classList.remove('order-call__input_error');
    }
  });
  const error = document.querySelector('.order-call__input_error');
  if (!error) {
    success.classList.add('order-success__open');
  } else {
    success.classList.remove('order-success__open');
  }
});
