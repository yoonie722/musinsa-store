$(function(){
  // 서브페이지 스토어 스와이퍼
  let storeSwiper = new Swiper('.store_swiper', {
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});
