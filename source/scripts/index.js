const slider = document.querySelector('.example__demo-slider');
const sliderWrapper = document.querySelector('.example__demo');
const sliderButton = document.querySelector('.example__demo-button');
const sliderBefore = document.querySelector('.example__demo-image--before');
const sliderAfter = document.querySelector('.example__demo-image--after');

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
