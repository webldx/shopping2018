// 支付的点击事件
$('.submit_order').click(function() {
    $('.pay').fadeIn();
    $('.close').fadeIn();
    $('.lid').fadeIn();
});

// 关闭按钮的点击事件
$('.close').click(function() {
    $('.pay').fadeOut();
    $('.close').fadeOut();
    $('.lid').fadeOut();
    $('.edit_pay_type').fadeOut();
});

// 更换支付方式
$('.edit_submit_type').click(function() {
    $('.edit_pay_type').fadeIn();
    $('.pay').fadeOut();

});

// 更改支付方式后点击支付
$('.paybtn').click(function() {
    $('.pay').fadeIn();
    $('.close').fadeIn();
    $('.edit_pay_type').fadeOut();

});