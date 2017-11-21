function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

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
