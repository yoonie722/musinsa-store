$(function(){
  // 푸터
  const btnFooterInfo = $('.btn_footer_info');

  btnFooterInfo.on('click', function () {
    const $target = $(this),
    footerInfoPanel = $target.next('.footer_info');

    if($target.attr('aria-expanded') === 'true') {
      $target.attr('aria-expanded', 'false');
      footerInfoPanel.attr('aria-hidden', 'true');
    } else {
      $target.attr('aria-expanded', 'true');
      footerInfoPanel.attr('aria-hidden', 'false');
    }
  })
})
