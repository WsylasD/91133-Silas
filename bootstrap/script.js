// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carouselEl = document.querySelector('#carouselExampleSlidesOnly');
    if (carouselEl) {
      new bootstrap.Carousel(carouselEl, {
        interval: 5000,
        ride: 'carousel'
      });
    }
  });
  