import debounce from './utils.js';

(() => {
  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // console.log(`slide in at: ${slideInAt}`);
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // console.log(`image bottom: ${imageBottom}`);
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      // console.log(`is half shown: ${isHalfShown}`);
      const isNotScrolledPast = window.scrollY < imageBottom;
      // console.log(`is not scrolled past: ${isNotScrolledPast}`);

      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

window.addEventListener('scroll', debounce(checkSlide));
})();
