$(function() {

    //ハンバーガー
    $('.ham').click(function() {
        $(this).toggleClass('active');
        $('.bg').toggleClass('active');
        $('.hamlist').toggleClass('active');

        return false;
    });

    //クローン
    var clone = $('header').clone(true).addClass('clone').appendTo('body');

    $(window).scroll(function() {
        if($(window).scrollTop() > 752) {
        clone.addClass('is-show');
        } else {
        clone.removeClass('is-show');
        }
    });

    //スライダー
    $('.bg-slider').bgSwitcher({
        images: ['./img/fv-bgi_01@2x.jpg', './img/fv-bgi_02@2x.jpg', './img/fv-bgi_03@2x.jpg'], // 切り替える背景画像を指定
        interval: 8000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 1000, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    
      });
});