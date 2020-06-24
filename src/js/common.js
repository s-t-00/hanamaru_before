$(function() {
  var isTouchDevice = (window.ontouchstart === null);
  if (isTouchDevice) {
    $("body").addClass("is_touchDevice");
  } else {
    $("body").addClass("is_notTouchDevice");
  }

  var $navbar_block = $(".navbar-block");
  $(".navbar-opener").bind("click", function(){
    if($navbar_block.hasClass("show")) {
      $(this).css("backgroundImage", "url(/images/common/navbar-opener.png)");
      $navbar_block.removeClass("show");
    } else {
      $(this).css("backgroundImage", "url(/images/common/navbar-opener-close.png)");
      $navbar_block.addClass("show");
    }
  });

  var $quick_diagnosis = $(".quick-diagnosis");
　$quick_diagnosis.fadeOut(0);
  $(window).scroll(function(){
    if($(this).scrollTop() > 800) {
      $quick_diagnosis.fadeIn();
    } else {
      $quick_diagnosis.fadeOut();
    }
  });

  var $clickable_input = $(".js-clickable");
  $clickable_input.bind("click", function(){
    var target = "input[type=radio], input[type=checkbox]";
    $(this).siblings(target).prop("checked", true);
  });
});
