$(window).on('load', function() {
  AOS.init({
    offset: 120,
    duration: 1500,
  });
});

$( function() {
  /* ハンバーガーメニュー */
  $('#js-btnHamburger').on('click', function(e) {
    e.preventDefault();
    let hamburgerMenu = $('#js-headerNav, #js-sidebar, #js-overlay');
    
    $('html, body, header').toggleClass('_open');
    $(hamburgerMenu).fadeToggle(600);

    if($('header').hasClass('_open')) {
      $('#js-btnHamburger').attr('aria-label', 'メニューを閉じる');
    }else {
      $('#js-btnHamburger').attr('aria-label', 'メニューを開く');
    };

    $(window).resize(function() {
      if (window.matchMedia( "(min-width: 992px)" ).matches) {
        $('body, header').removeClass('_open');
        $(hamburgerMenu).attr('style', null);
        $('#js-btnHamburger').attr('aria-label', 'メニューを開く')
      }
    });
    return false;
  });
  
  /* mv swiper */
  const swiperMv = new Swiper('.swiper-mv', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 5000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
  
  /* blog swiper */
  const swiperNews = new Swiper('.swiper-news', {
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 2000,
    },
    speed: 2000,
    loopedSlides: 5,
    spaceBetween: 17,
    width: 200,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // キーボード操作
    keyboard: {
      enabled: true,
    },
    // aria-labelの内容を変更
    a11y: {
      containerMessage:'Newsのカルーセル',
      slideLabelMessage:'{{index}}枚目のスライド',
      paginationBulletMessage: '{{index}}枚目のスライドを表示',
    },
    breakpoints: {
      768: {
        spaceBetween: 26,
        width: 300,
      }
    }
  });
  
})

