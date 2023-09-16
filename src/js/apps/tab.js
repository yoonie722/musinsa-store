$(function(){
  const cityTabs = $('.tab_city'),
        cityPanels = $('.tabpanel_city');

  // 도시 탭 클릭
  cityTabs.on('click', function() {
    const tab = $(this);
    const id = tab.attr('id');
    const pannel = cityPanels.filter(`[aria-labelledby^=${id}]`);

    // reset
    cityTabs.attr('aria-selected', false);
    cityPanels.attr('hidden', true);
    cityPanels.attr('tab-index', -1);

    // active
    tab.attr('aria-selected', true);
    pannel.attr('hidden', false);
    pannel.attr('tab-index', 0);
  });

})
