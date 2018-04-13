$(function(){
//top-bar-nav鼠标放上 高亮显示，移开恢复原样
    var color="";//记录原有样式
    $(".topbar-nav a").mouseenter(function(){
        color=$(this).css("color");
        $(this).css({"color":"#FFFFFF","text-decoration":"none"});
    });
    $(".topbar-nav a").mouseleave(function () {
        $(this).css("color",color);
    })
    //购物车部分 鼠标放上，car-menu显示，移开隐藏
    $(".topbar-cart").mouseenter(function () {
        // $(".cart-menu").style.display="block";
        $(".cart-menu").show();
    });
    $(".topbar-cart").mouseleave(function () {
        $(".cart-menu").hide();
    });

    //header
    //鼠标放nav-item上时，对nav-item增加navitem-active类，显示item-children盒子
    // $(".header-nav .nav-item a").mouseenter(function () {
    //     // $(this).css({"color":"#ff6700","text-decoration":"none"});
    //     $(this).addClass("link");
    // })
    // $(".header-nav .nav-item a").mouseleave(function () {
    //     $(this).removeClass("link");
    // })
});


