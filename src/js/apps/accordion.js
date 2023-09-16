$(function(){
  const accordionItem = $('.accordion'),
  accordionTriggers = $('.accordion_trigger'),
  accordionPanels = $('.accordion_panel');

  accordionTriggers.each(function() {
    const accordion = $(this);

    // 아코디언 열기/닫기
    accordion.on('click', function (e) {
      const $target = $(e.currentTarget),
      $panel = $target.next('.accordion_panel'),
      panelHeight = $target.next('.accordion_panel').find('.pannel_inner').outerHeight();
      if($target.attr('aria-expanded') === "true") {
        // 닫기
        $target.attr('aria-expanded', false);
        $panel.height(0);
      } else {
        // 열기
        $target.attr('aria-expanded', true);
        $panel.height(panelHeight);
      }
    })
  });

});
