
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // 
  //ドロワーメニュー
  $(".js-drawer-button").click(function () {
    $(".js-drawer-button").toggleClass("js-drawer-button-open");
    $(".js-drawer-menu").toggleClass("js-drawer-menu-open");
    $(".js-drawer-menu>a>li").toggleClass("open");

  });
  // 
});
