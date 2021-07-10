const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileUploader = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');

const startUploader = () => {
  fileUploader.addEventListener('change', () => {
    const file = fileUploader.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

export {startUploader};
