const slider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const applyEffect = (evt) => {
  switch (evt.target.id) {
    case 'effect-none':
      imgPreview.removeAttribute('class');
      return imgPreview.classList.add('effects__preview--none');
    case 'effect-chrome':
      imgPreview.removeAttribute('class');
      return imgPreview.classList.add('effects__preview--chrome');
    case 'effect-sepia':
      imgPreview.removeAttribute('class');
      return imgPreview.classList.add('effects__preview--sepia');
    case 'effect-marvin':
      imgPreview.removeAttribute('class');
      return imgPreview.classList.add('effects__preview--marvin');
    case 'effect-phobos':
      imgPreview.removeAttribute('class');
      return imgPreview.classList.add('effects__preview--phobos');
    case 'effect-heat':
      imgPreview.removeAttribute('class');
      return imgPreview.classList.add('effects__preview--heat');
  }
};

effectsList.addEventListener('click', applyEffect);

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});
