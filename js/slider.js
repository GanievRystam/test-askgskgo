const slideWrap = document.querySelector('.sliders__wrap');
const slidersWidth = getComputedStyle(document.querySelector('.slider__img')).width.split('px')[0];
const dots = document.querySelectorAll('.dots__dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    document.querySelector('.dots__dot_active').classList.remove('dots__dot_active');
    const widthSlid = index * 25 + index * slidersWidth;
    slideWrap.style.left = -widthSlid + 'px';
    dot.classList.add('dots__dot_active');
  });
});
