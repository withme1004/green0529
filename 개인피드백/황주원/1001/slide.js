var galleryMainThumb = new Swiper(".mySwiper .swiper-container", {
  slidesPerView: "auto",
  speed: 500,
  loop: true,
  spaceBetween: 400,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var galleryMain = new Swiper(".mySwiper1 .swiper-container", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  effect: "fade",
  pagination: {
    el: ".section .main4 .mySwiper1 .swiper-container .paginate",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper1 .next",
    prevEl: ".mySwiper1 .prev",
  },
});
const nextButton = document.querySelector(".mySwiper1 .next");
const prevButton = document.querySelector(".mySwiper1 .prev");

nextButton.addEventListener("click", function () {
  galleryMainThumb.slideNext();
});

prevButton.addEventListener("click", () => {
  galleryMainThumb.slidePrev();
});
