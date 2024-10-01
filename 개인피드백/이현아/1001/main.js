var section = document.querySelector(".section02");

var imgEl = section.querySelectorAll(".swiper1 .swiper-slide");
var txtEl = section.querySelectorAll(".item");
var indiEl = section.querySelectorAll(".indi-item");
var swiper = new Swiper(".swiper1", {
  speed: 800,
  effect: "creative",

  creativeEffect: {
    //creativeEffect 옵션은 Swiper.js에서 슬라이드 전환에 창의적이고 독특한 애니메이션을 적용할 수 있는 강력한 기능
    prev: {
      // 이전 슬라이드의 효과 설정
      opacity: 0,
      rotate: [0, 0, -45],
    },
    next: {
      // 다음 슬라이드의 효과 설정
      rotate: [0, 0, 45],
      opacity: 0,
    },
  },
});
function imgRotate(scrollPos) {
  console.log(scrollPos);
  imgEl.forEach(function (img, i) {
    indiEl[i].classList.remove("active");
    txtEl[i].classList.remove("active");
  });
  if (scrollPos <= 20) {
    slideMove(0);
  } else if (scrollPos > 20 && scrollPos <= 60) {
    slideMove(1);
  } else if (scrollPos > 60 && scrollPos <= 80) {
    slideMove(2);
  } else {
    slideMove(3);
  }
}
function slideMove(num) {
  swiper.slideTo(num);
  indiEl[num].classList.add("active");
  txtEl[num].classList.add("active");
}

ScrollTrigger.create({
  trigger: section,
  start: "top 80px",
  end: "+=1500",
  //markers: true,
  pin: true,
  onUpdate: function onUpdate(self) {
    var scrollPos = self.progress.toFixed(2) * 100;
    imgRotate(scrollPos);
  },
});

let pinWrap = document.querySelector(".slide-img");
let pinWrapWidth = pinWrap.offsetWidth;
gsap.to(".slide-img", {
  x: -pinWrapWidth,
  scrollTrigger: {
    scrub: true,
    trigger: ".section03",
    pin: true,
    markers: true,
    start: "top 80px",
    end: "+=5000",
  },
});
