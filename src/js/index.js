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