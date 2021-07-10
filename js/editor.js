const DEFAULT_EFFECT = 'none';
const CHROME_EFFECT = 'chrome';
const SEPIA_EFFECT = 'sepia';
const MARVIN_EFFECT = 'marvin';
const PHOBOS_EFFECT = 'phobos';
const HEAT_EFFECT = 'heat';
const effectLevelField = document.querySelector('.effect-level');
const slider = effectLevelField.querySelector('.effect-level__slider');
const effectLevel = effectLevelField.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview img');

const resetEffect = () => {
  imgPreview.className = '';
};

const createSlider = () => {
  resetEffect();
  effectLevelField.classList.add('hidden');
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  const applyEffect = (evt) => {
    resetEffect();
    imgPreview.classList.add(`effects__preview--${evt.target.value}`);
    effectLevelField.classList.remove('hidden');
    if (evt.target.value === 'none') {
      effectLevelField.classList.add('hidden');
    }

    switch (evt.target.value) {
      case DEFAULT_EFFECT:
        imgPreview.style.filter = '';
        break;

      case CHROME_EFFECT:
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `grayscale(${effectLevel.value})`;
        });
        break;

      case SEPIA_EFFECT:
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `sepia(${effectLevel.value})`;
        });
        break;

      case MARVIN_EFFECT:
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `invert(${effectLevel.value}%)`;
        });
        break;

      case PHOBOS_EFFECT:
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `blur(${effectLevel.value}px)`;
        });
        break;

      case HEAT_EFFECT:
        imgPreview.style.filter = '';
        slider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });

        slider.noUiSlider.on('update', (_, handle, unencoded) => {
          effectLevel.value = unencoded[handle];
          imgPreview.style.filter = `brightness(${effectLevel.value})`;
        });
        break;
    }
  };

  effectsList.addEventListener('click', applyEffect);
};

const removeSlider = () => {
  slider.noUiSlider.destroy();
  imgPreview.style = '';
};

export {createSlider, removeSlider};
