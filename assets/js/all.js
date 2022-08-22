"use strict";

var programSwiper = new Swiper(".programSwiper", {
  autoplay: {
    // delay: 2000,
    // disableOnInteraction: false,
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    767: {
      slidesPerView: 5
    },
    991: {
      slidesPerView: 7
    }
  }
});
var powerswiper = new Swiper(".powerswiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  }
});
var programSwiper = new Swiper(".courseSwiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  breakpoints: {
    767: {
      slidesPerView: 4
    },
    991: {
      slidesPerView: 6
    }
  }
});
//# sourceMappingURL=all.js.map
