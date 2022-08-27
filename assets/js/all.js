"use strict";

AOS.init();
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
    el: ".swiper-pagination",
    clickable: true
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
var pc = window.matchMedia("(min-width: 767px)");
pc.addListener(checkMenuClose);

function checkMenuClose(pMatchMedia) {
  if (pMatchMedia.matches) {
    console.log("大於767");
    $("#collapseMenu").collapse("hide");
  } else {
    console.log("小於767");
  }
}

var elem = document.querySelector('input[name="inputDate"]');
var datepicker = new Datepicker(elem, {
  autohide: true,
  language: "zh-TW",
  buttonClass: "btn"
});
//# sourceMappingURL=all.js.map
