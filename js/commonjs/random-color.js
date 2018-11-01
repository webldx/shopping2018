$(function() {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getColor() {
        var str = '#';
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        for (var i = 0; i < 6; i++) {
            str += arr[getRandom(0, arr.length)];
        }
        return str;
    };
    // for (var i = 0; i < $('.navBox a').length; i++) {
    //     $('.navBox a')[i].style.backgroundColor = getColor();
    // };

    /*     setInterval(function() {
            // document.body.style.backgroundColor = getColor();
            // $('.navBox a').get(0).style.backgroundColor = getColor();
            for (var i = 0; i < $('.navBox a').length; i++) {
                $('.navBox a')[i].style.backgroundColor = getColor();
            };
            $('.topSearchBox span').get(0).style.color = getColor();
        }, 100) */
});