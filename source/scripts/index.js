const slider = document.querySelector('.demo__slider');
const sliderWrapper = document.querySelector('.demo');
const sliderButton = document.querySelector('.demo__button');
const sliderBefore = document.querySelector('.demo__image--before');
const sliderAfter = document.querySelector('.demo__image--after');

let start = false;
let position;
let translateX = 0;

if (sliderButton && slider) {
  sliderButton.addEventListener('pointerdown', (e) => {
    start = true;
  });

  sliderWrapper.addEventListener('pointermove', (e) => {
    e.preventDefault();
    if (start) {
      if (position) {
        const delta = position - e.clientX;
        slideIt(delta);
      }

      position = e.clientX;
    }
  });

  document.addEventListener('pointerup', (e) => {
    start = false;
  });
}

const slideIt = (x) => {
  const sliderBeforeWidth = Math.round(
    sliderBefore.getBoundingClientRect().width - x
  );
  const sliderAfterWidth =
    sliderWrapper.getBoundingClientRect().width - sliderBeforeWidth;

  sliderBefore.style.width = sliderBeforeWidth + 'px';
  sliderAfter.style.width = sliderAfterWidth + 'px';

  let sliderTranslate = translateX - x;

  if (sliderTranslate > sliderWrapper.getBoundingClientRect().width / 2) {
    sliderTranslate = sliderWrapper.getBoundingClientRect().width / 2;
  }

  if (
    sliderTranslate <
    (sliderWrapper.getBoundingClientRect().width / 2) * -1
  ) {
    sliderTranslate = (sliderWrapper.getBoundingClientRect().width / 2) * -1;
  }
  slider.style.transform = `translateX(${sliderTranslate}px)`;
  translateX -= x;
};
