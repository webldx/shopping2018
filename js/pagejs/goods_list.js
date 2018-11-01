// 搜索框出下拉列表的点击事件
var flag1 = false;
$('.list_btn').on('click', function() {
    if (!flag1) {
        $('.list').slideDown();
        flag1 = true;
    } else {
        $('.list').slideUp();
        flag1 = false;
    }
});

// 右侧导航栏的点击事件
var flag2 = false;
$('.right_list_box li').on('click', function() {
    // if (this.style.display == 'block') {
    //     flag2 = true;
    // }

    if (!flag2) {
        $('.left_hover_list').show();
        flag2 = true;
    } else {
        $('.left_hover_list').hide();
        flag2 = false;
    }
});


// 加载更多的点击事件
$('.load_more').click(function() {

});