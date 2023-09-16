$(function(){
  const btnTop = $('.btn_top');
  let ww = $(window).width();

  // load
  $(window).on('load', function () {
    btnTop.hide();
  })

  $(window).on('resize', function () {
    if ($(window).width() > 768) {
      btnTop.hide();
    }
  })

  //  btn top
  btnTop.on('click', function(){
    $('html, body').stop().animate({
        scrollTop : 0
    })
  });

  // scroll
  $(window).on('scroll touchmove mousewheel', function () {
    const footer = document.querySelector(".footer");
    if ($(window).width() <= 768) {
      if(window.innerHeight - footer.getBoundingClientRect().top > 0){
        btnTop.show();
      }else {
        btnTop.hide();
      }
    }
  })
})
