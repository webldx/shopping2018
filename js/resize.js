// 当浏览器窗口大小发生变化的时候 执行什么事情
window.onresize = resizePage;

resizePage();

function resizePage() {

    // 当前屏幕的宽度
    var current = document.documentElement.clientWidth;

    document.documentElement.style.fontSize = current * 100 / 1920 + 'px';
}