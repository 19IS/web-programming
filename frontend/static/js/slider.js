$(document).ready(() => {
  let currentSlide = 0;
  let isBusy = false;

  $('.slider-arrow').on('click', function(e) {
    const slidesCount = slides.length - 1;
    if (!isBusy) {

      if ($(this).hasClass('right')) {
        currentSlide += 1;
        if (currentSlide > slidesCount) currentSlide = 0;
      } else {
        currentSlide -= 1;
        if (currentSlide < 0) currentSlide = slidesCount;
      }
      isBusy = true;
      $('.slider-image').animate({'opacity': 0}, 350, () => {
        $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
        $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
      });
    }
  });

});

const slides = [
  'img/blog/blog00.jpg',
  'img/blog/blog01.jpg',
  'img/blog/blog02.jpg',
  'img/blog/blog03.jpg',
  'img/blog/blog04.jpg',
  'img/blog/blog05.jpg',
  'img/blog/blog06.jpg',
  'img/blog/blog07.jpg',
]
