const swiper = new Swiper('.swiper-container', {
    // Optional parametersループする
    loop: true,
  
    // If we need paginationドットのボタン
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  new WOW().init();


  $('.header-item').on('click', function() {
    //クラスを削除する
    $('.header-item').removeClass('is-active');
    //今クリックされたものにクラスを追加する
    $(this).addClass('is-active');
    return false;
  });

  //#から始まるaタグがクリックされたとき
  $('a[href^="#"]').on('click', function() {
    
    //ヘッダーの位置、高さを取得
    var header = $('.header').innerHeight();
    //クリックされたhrefのidを取得
    var id  = $(this).attr('href');

    var position = 0;
    //idの値がシャープじゃない場合
    //シャープだった場合、0のまま 
    if( id != '#') {
      //上部からの位置を取得して、ヘッダーの高さを引く
      var position = $(id).offset().top - header;
    }
    
    //上からどこまでの位置に移動するのか
    $('html, body').animate({
      scrollTop: position
    },
    300);//移動する秒数
  });

  $(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (100 < $(this).scrollTop()) {
      // is-showクラスをつける
   $('.to-top').addClass( 'is-show' );
    } else {
      // 100pxを下回ったらis-showクラスを削除
    $('.to-top').removeClass( 'is-show' );
    }
  });

  $('.drawer-icon').on('click', function(e) {
    //イベントの本来の動作を止める
    e.preventDefault();
    
    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');

    return false;
  });

  

