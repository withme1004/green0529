$(function () {
  // 메인 풀페이지
  var isFullpageInitialized = false;
  function initializeFullpage() {
    var wheelCount = 0;

    //fullpage
    $("#fullpage").fullpage({
      scrollingSpeed: 750,
      scrollBar: false,

      // ** 페이지를 불러온 후
      afterLoad: function (anchorLink, index, direction) {
        console.log(index);
        if (index === 1) {
          $(".section")
            .eq(index - 1)
            .addClass("after-load");
          if (!$(".section").eq(index).hasClass("after-load")) {
            AOS.init();
          }

          $(".s0").find("[data-aos]").removeClass("aos-animate");

          setTimeout(() => {
            $(".txt1").addClass("active");
          }, 1300);
        } else {
          $(".section")
            .eq(index - 2)
            .find("[data-aos]")
            .removeClass("aos-animate");
          $(".section")
            .eq(index - 1)
            .find("[data-aos]")
            .addClass("aos-animate");
        }
      },

      // ** 페이지를 떠날때
      onLeave: function (origin, destination, direction, index) {
        if (origin == 1 && wheelCount < 1) {
          setTimeout(() => {
            $(".txt1").addClass("hide");
            $(".txt1").find("[data-aos]").removeClass("aos-animate");
          }, 750);
        } else {
          $(".txt1").removeClass("hide");
        }

        $(".section").eq(origin).find("[data-aos]").removeClass("aos-animate");

        if (destination < 3) {
          $(".head").removeClass("scrolled");
          $(".head .inner > ul > li>p ").removeClass("on");
        } else {
          $(".head").addClass("scrolled");
          $(".head .inner > ul > li>p ").addClass("on");
        }
      },
    });

    isFullpageInitialized = true;

    document.addEventListener("wheel", function (event) {
      var bodyClass = document.body.className;
      var time = 750;
      if (bodyClass.includes("fp-viewing-0")) {
        if (event.deltaY < 0) {
          if (wheelCount > 0) {
            setTimeout(() => {
              wheelCount--;
            }, time);
          } else if (wheelCount <= 0) {
            $(".txt1").removeClass("hide");
            $(".txt1").find("[data-aos]").addClass("aos-animate");
            $(".s0").removeClass("active");
            $(".s0").find("[data-aos]").removeClass("aos-animate");
            wheelCount = 0;
          }
        } else if (event.deltaY > 0) {
          if (wheelCount < 2) {
            if (wheelCount < 1) {
              setTimeout(() => {
                wheelCount++;
              }, time);
            } else {
              wheelCount++;
            }
          }
        }

        // wheelCount가 2에 도달하면 다음 섹션으로 이동
        if (wheelCount >= 2) {
          wheelCount = 2; // wheelCount 초기화 (선택적)
        }
      }
    });
  }

  initializeFullpage();
});
