var mainDescSwiper = new Swiper(".mainDescSwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#mainNextBtn",
    prevEl: "#mainPrevrBtn",
  },
});
var mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: "auto",
  spaceBetween: 32,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#mainNextBtn",
    prevEl: "#mainPrevrBtn",
  },
});

mainSwiper.controller.control = mainDescSwiper;
mainDescSwiper.controller.control = mainSwiper;