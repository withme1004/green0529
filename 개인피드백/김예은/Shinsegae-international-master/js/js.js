
$(function(){
  // $(".gnb li").mouseenter(function(){
  //   let i = $(this).index();
  //   $(".bg").css("opacity", "1");
  //   $(".sub>li").removeClass("on");
  //   $(".sub>li").eq(i).addClass("on")
  // });
  $(".gnb li").hover(function(){
    let i = $(this).index();
    //console.log(i);
    $(this).find("a").removeClass("on1").addClass("on");
    $(".bg").css("opacity", "1");
    $(".sub>li").removeClass("on");
    $(".sub>li").eq(i).addClass("on")
    $(".menuwrap").addClass("Hactive");
  },function(){
    $(this).find("a").removeClass("on").addClass("on1");
    $(".menuwrap").removeClass("Hactive");
  })
  $(".menu").mouseleave(function(){
    $(".bg").css("opacity", "0");
    $(".sub>li").removeClass("on");
  });

  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 67&& $(this).scrollTop() <=990){
     $(".menuwrap").removeClass("active").addClass("on");
      $(".menu .gnb>li>a").removeClass("scroll active");
      $(".menulogo").removeClass("on").css("opacity", "1");
      $(".bg").removeClass("scroll");
      $(".sub a").removeClass("scroll");
    }
    else if($(this).scrollTop() > 990){
      $(".menuwrap").removeClass("on").addClass("active");
      $(".menu .gnb>li>a").addClass("scroll active");
      $(".bg").addClass("scroll");
      $(".sub a").addClass("scroll");
      $(".menulogo").addClass("on");
    }
    else{
      $(".menuwrap").removeClass("on active");
      $(".menu .gnb>li>a").removeClass("scroll active");
      $(".menulogo").removeClass("on").css("opacity", "0"); 
      $(".bg").removeClass("scroll");
      $(".sub a").removeClass("scroll");
    }
   
  });

 

});



AOS.init({ offset:200 });