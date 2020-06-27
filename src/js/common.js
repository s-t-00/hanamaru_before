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

  var $number_format = $(".js-numberformat");
  $number_format.each(function(){
    var num = $(this).text();
    $(this).text(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num));
  });
});

  /* クイック診断フォーム操作
  -----------------------------------------------------------------
   */
  $(function() {

    // radioボタンチェックをチェックしたら発動
    $('#children-yes').change(function() {
  
      // もし「children-yes」のチェックが入ったら
      if ($(this).prop('checked')) {
  
        // 非活性＋なしにチェックつける
        $('input[id="children-num"]').prop('disabled', false);
        $('input[id="parents-num"]').prop('disabled', true);
        $('input[id="brother-num"]').prop('disabled', true);
        $('input[id="parents-none"]').prop('checked', true);
        $('input[id="brother-none"]').prop('checked', true);
  
      // もしチェックが外れたら
      } else {
  
        // チェックを外す
        $('input[id="children-num"]').prop('disabled', true);
      }
  
    });

    $('#children-none').change(function() {
  
      // もし「children-none」のチェックが入ったら
      if ($(this).prop('checked')) {
  
        // 非活性にする
        $('input[id="children-num"]').prop('disabled', true);
      }
  
    });

    $('#parents-yes').change(function() {
  
      // もし「parents-yes」のチェックが入ったら
      if ($(this).prop('checked')) {
  
        // 非活性＋なしにチェックつける
        $('input[id="parents-num"]').prop('disabled', false);
        $('input[id="children-num"]').prop('disabled', true);
        $('input[id="brother-num"]').prop('disabled', true);
        $('input[id="children-none"]').prop('checked', true);
        $('input[id="brother-none"]').prop('checked', true);
  
      // もしチェックが外れたら
      } else {
  
        // チェックを外す
        $('input[id="parents-num"]').prop('disabled', true);
      }
  
    });

    $('#parents-none').change(function() {
  
      // もし「children-none」のチェックが入ったら
      if ($(this).prop('checked')) {
  
        // 非活性にする
        $('input[id="parents-num"]').prop('disabled', true);
      }
  
    });

    $('#brother-yes').change(function() {
  
      // もし「brother-yes」のチェックが入ったら
      if ($(this).prop('checked')) {
  
        // parents-yes
        $('input[id="brother-num"]').prop('disabled', false);
        $('input[id="children-num"]').prop('disabled', true);
        $('input[id="parents-num"]').prop('disabled', true);
        $('input[id="children-none"]').prop('checked', true);
        $('input[id="parents-none"]').prop('checked', true);
  
      // もしチェックが外れたら
      } else {
  
        // チェックを外す
        $('input[id="brother-num"]').prop('disabled', true);
      }
  
    });

    $('#brother-none').change(function() {
  
      // もし「brother-none」のチェックが入ったら
      if ($(this).prop('checked')) {
  
        // 非活性にする
        $('input[id="brother-num"]').prop('disabled', true);
      }
  
    });

  });