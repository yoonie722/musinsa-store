$(function(){
  const mapLink = $('.map_link'),
        tabDistrict = $('.tab_district'),
        accordionItems = $('.accordion_item'),
        accordionTriggers = $('.accordion_trigger'),
        accordionPanels = $('.accordion_panel');

  let prevStore;

  function getStoreMap (e) {
    const $target = $(e.currentTarget),
    $parent = $target.parents('.tabpanel_city'),
    storeId = $target.data('id'),
    $map = $target.parents('.map_area').find('.map'),
    $mapImg = $map.find('img'),
    mapId = $map.attr('id');
    let district;

    if(prevStore === storeId) return;

    switch (mapId) {
      case 'mapDaegu':
        district = 'daegu';
        break;
      case 'mapBusan':
        district = 'busan';
        break;
      default:
        district = 'seoul';
        break;
    }

    $parent.find('.accordion_item').css('display', 'none');
    // accordionItems.css('display', 'none');
    accordionItems.filter(`[data-id="${storeId}"]`).css('display', 'block');
    $mapImg.attr('src', `../img/common/map/${district}/${storeId}.png`);
    accordionTriggers.attr('aria-expanded', false);
    accordionPanels.height(0);

    prevStore = storeId;
  }

  // 지도 위 구역 선택
  mapLink.on('click', function(e) {
    e.preventDefault();
    if(!e.currentTarget) return;
    getStoreMap(e);
  });

  // 지도 옆 명칭 선택
  tabDistrict.on('click', function(e) {
    e.preventDefault();
    if(!e.currentTarget) return;
    getStoreMap(e);
  });

})
