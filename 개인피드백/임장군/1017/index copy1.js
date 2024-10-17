$(".hamNav").css("display", "none");
function gnb() {
  $("header .head .gnb .dep1 > li").hover(
    function () {
      $("header .head .gnb .dep1 > li > a").addClass("on");
      $("header .head .logo a").addClass("on");
      $(".headRight .hamberger div").addClass("on");
      $(".headRight .hamberger").addClass("black");
    },
    function () {
      $("header .head .gnb .dep1 > li > a").removeClass("on");
      $("header .head .logo a").removeClass("on");
      $(".headRight .hamberger div").removeClass("on");
      $(".headRight .hamberger").removeClass("black");
    }
  );
}
function gnb1() {
  $("header .head .gnb .dep1 > li").hover(
    function () {
      //$("header .head .logo a").addClass("on");
      $("header .head .gnb .dep1 > li > a").addClass("on");
      $(".headRight .hamberger div").addClass("on");
      $(".headRight .hamberger").addClass("black");
    },
    function () {
      $("header .head .logo a").addClass("on");
      $("header .head .gnb .dep1 > li > a").addClass("on");
      $(".headRight .hamberger div").addClass("on");
      $(".headRight .hamberger").addClass("black");
    }
  );
}
let bool = true;
$(".headRight .hamberger").click(function () {
  if (bool) {
    $(".hamNav").css("display", "block");
    $(".headRight").css("right", "1.5%");
    $(".headRight .hamberger").addClass("on");
    $(".headRight .hamberger div").removeClass("on");
    $(".headRight .hamberger .bar1").css({
      left: "14px",
      top: "calc(50% - 0.5px)",
      transform: "rotate(45deg)",
    });
    $(".headRight .hamberger .bar2").css("display", "none");
    $(".headRight .hamberger .bar3").css({
      left: "14px",
      bottom: "calc(50% - 0.5px)",
      transform: "rotate(-45deg)",
    });
  } else {
    $(".hamNav").css("display", "none");
    $(".headRight").css("right", "6.3%");
    $(".headRight .hamberger").removeClass("on");
    //$(".headRight .hamberger div").css("background-color", "#000");
    $(".headRight .hamberger .bar1").css({
      left: "15px",
      top: "18px",
      transform: "rotate(0)",
    });
    $(".headRight .hamberger .bar2").css("display", "block");
    $(".headRight .hamberger .bar3").css({
      left: "15px",
      bottom: "17px",
      transform: "rotate(0)",
    });
  }
  bool = !bool;
});

$("#fullpage").fullpage({
  anchors: [
    "sec1",
    "sec2",
    "sec3",
    "sec4",
    "sec5",
    "sec6",
    "sec7",
    "sec8",
    "sec9",
  ],
  scrollingSpeed: 1000,
  onLeave: function (origin, destination, direction) {
    $("#fullpage").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    swiper2.mousewheel.disable();
    swiper3.mousewheel.disable();
    swiper5.mousewheel.disable();
    swiper6.mousewheel.disable();
    swiper7.mousewheel.disable();
  },
  afterLoad: function (anchorLink, index) {
    //gnb();
    $("#fullpage").off("scroll mousewheel");
    if (!$(".fp-completely .swiper-wrapper").length > 0)
      $("#fullpage").off("touchmove");
    if (swiper2) swiper2.mousewheel.enable();
    if (swiper3) swiper3.mousewheel.enable();
    if (swiper5) swiper5.mousewheel.enable();
    if (swiper6) swiper6.mousewheel.enable();
    if (swiper7) swiper7.mousewheel.enable();
    if (!$(".section").hasClass("active"))
      $.fn.fullpage.setAllowScrolling(true);
    const realIndex = index - 1;
    sectionIndex = realIndex;
    if (
      index == 2 ||
      index == 3 ||
      index == 4 ||
      index == 6 ||
      index == 8 ||
      index == 9
    ) {
      gnb1();
      $(".headRight .hamberger").addClass("black");
      $(".headRight .hamberger div").addClass("on");
      $("header .head .logo a").addClass("on");
      $("header .head .gnb .dep1 > li > a").addClass("on");

      $("header .head .tel").css("color", "#000");
      $("header .head .tel .telBg").css({
        borderColor: "#000",
        backgroundColor: "#000",
      });
      $("header .head  .tel .telBg div").addClass("on");

      //$(".headRight .hamberger div").css("background-color", "#000");
    } else {
      $(".headRight .hamberger").removeClass("black");
      $("header .head .logo a").removeClass("on");
      $("header .head .gnb .dep1 > li > a").removeClass("on");
      gnb();
      $("header .head .tel").css("color", "#fff");
      $("header .head .tel .telBg").css({
        borderColor: "#fff",
        backgroundColor: "#fff",
      });
      $("header .head .tel .telBg div").removeClass("on");
    }
    if (index == 9) {
      $("header .head .logo").css("visibility", "hidden");
      $("header .head .gnb").css("visibility", "hidden");
      $("header .head .tel").css("cursor", "default");
      $("header .head .tel p").css("visibility", "hidden");
      $("header .head .tel .telBg").css("visibility", "hidden");
    } else {
      $("header .head .logo").css("visibility", "visible");
      $("header .head .gnb").css("visibility", "visible");
      $("header .head .tel").css("cursor", "pointer");
      $("header .head .tel p").css("visibility", "visible");
      $("header .head .tel .telBg").css("visibility", "visible");
    }
  },
});

// 햄버거 버튼이 풀페이지 시 변경은 잘 됐으나, 스와이퍼에도 적용하려 하니 버튼이 눌리지 않음 (현재 우선적으로 .sec2에 적용하던 중)

var length2 = $(".sec2 .swiper-slide").length;
var swiper2 = new Swiper(".sec2 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      console.log(i);
      if (this.activeIndex != 0 && i != length2)
        $.fn.fullpage.setAllowScrolling(false);
      if (length2 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);

      if (i == 1) {
        $(".headRight .hamberger").removeClass("black");
        $(".headRight .hamberger div").removeClass("on");
        $("header .head .logo a").removeClass("on");

        $("header .head .gnb .dep1 > li > a").removeClass("on");
        gnb();
        $("header .head .tel").css("color", "#fff");
        $("header .head .tel .telBg").css({
          borderColor: "#fff",
          backgroundColor: "#fff",
        });
        $("header .head .tel .telBg div").removeClass("on");
        // $(".headRight .hamberger").css("border-color", "#fff");
        // $(".headRight .hamberger div").css("background-color", "#fff");
      } else {
        $(".headRight .hamberger").addClass("black");
        $(".headRight .hamberger div").addClass("on");
        $("header .head .logo a").addClass("on");
        $("header .head .gnb .dep1 > li > a").addClass("on");
        gnb1();
        // $("header .head .gnb .dep1 > li > a").css("color", "#333");
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length2 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
  },
});
var length3 = $(".sec3 .swiper-slide").length;
var swiper3 = new Swiper(".sec3 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length3)
        $.fn.fullpage.setAllowScrolling(false);
      if (length3 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length3 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
  },
});
var length5 = $(".sec5 .swiper-slide").length;
var swiper5 = new Swiper(".sec5 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length5)
        $.fn.fullpage.setAllowScrolling(false);
      if (length5 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
      if (i == 1) {
        $("header .head .logo a").addClass("on");
        // $("header .head .gnb .dep1 > li > a").css("color", "#333");
        $("header .head .gnb .dep1 > li > a").addClass("on");
        gnb1();
        $("header .head  .tel").css("color", "#000");
        $("header .head  .tel .telBg").css({
          borderColor: "#000",
          backgroundColor: "#000",
        });
        $("header .head  .tel .telBg div").addClass("on");
      }
      if (i == 0 || i == 2) {
        $("header .head .logo a").removeClass("on");
        // $("header .head .gnb .dep1 > li > a").css("color", "#fff");
        $("header .head .gnb .dep1 > li > a").removeClass("on");
        gnb();
        $("header .head  .tel").css("color", "#fff");
        $("header .head  .tel .telBg").css({
          borderColor: "#fff",
          backgroundColor: "#fff",
        });
        $("header .head  .tel .telBg div").removeClass("on");
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length5 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
  },
});
var length6 = $(".sec6 .swiper-slide").length;
var swiper6 = new Swiper(".sec6 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length6)
        $.fn.fullpage.setAllowScrolling(false);
      if (length6 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
      if (i == 0 || i == 2) {
        $("header .head .logo a").addClass("on");
        // $("header .head .gnb .dep1 > li > a").css("color", "#333");
        $("header .head  .tel").css("color", "#000");
        $("header .head  .tel .telBg").css({
          borderColor: "#000",
          backgroundColor: "#000",
        });
        $("header .head  .tel .telBg div").addClass("on");
      }
      if (i == 1) {
        $("header .head .logo a").removeClass("on");
        // $("header .head .gnb .dep1 > li > a").css("color", "#fff");
        $("header .head .gnb .dep1 > li > a").removeClass("on");
        gnb();
        $("header .head  .tel").css("color", "#fff");
        $("header .head  .tel .telBg").css({
          borderColor: "#fff",
          backgroundColor: "#fff",
        });
        $("header .head  .tel .telBg div").removeClass("on");
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length6 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
  },
});
var length7 = $(".sec7 .swiper-slide").length;
var swiper7 = new Swiper(".sec7 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length7)
        $.fn.fullpage.setAllowScrolling(false);
      if (length7 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length7 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
  },
});
