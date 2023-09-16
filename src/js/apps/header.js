$(function(){
  const btnGlobal = $('.header_button.language'),
        layerGlobal = $('.layer_language'),
        btnLangs = layerGlobal.find('.btn_lang');

  // 언어 선택 레이어 열기/닫기
  btnGlobal.on('click', function(e) {
    const $target = $(e.currentTarget);
    if($target.attr('aria-expanded') === "true") {
      // 닫기
      $target.attr('aria-expanded', false);
    } else {
      // 열기
      $target.attr('aria-expanded', true);
    }
  });

  // 언어 선택
  // btnLangs.each(function() {
  //   $(this).on('click', function(e) {
  //     const $target = $(e.currentTarget);
  //   })
  // });

})
