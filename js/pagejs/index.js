// 顶部搜索框的事件

let num = 0;
$('.searchBtn').on('click', function() {
    num++;
    if (num >= 3) {
        layer.msg('和你说不明白？');
        return;
    };
    let val = $('.search_ipt').val().trim();
    if (!val) {
        layer.msg('您还没有输入查询的参数~~');
        return;
    };

});

// 每个标签的点击事件
$('.navBox a').on('click', function() {
    var str = $(this).html();
    console.log(str);
});