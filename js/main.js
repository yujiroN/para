'use strict';

// first-vの背景画像のパララックス
$(function () {
    var target1 = $("#parallax-01");
    var targetPosOT1 = target1.offset().top;
    var targetFactor = 0.5;
    var windowH = $(window).height();
    var scrollYStart1 = targetPosOT1 - windowH;

    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart1) {
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
        } 
    });
});
