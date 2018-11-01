function getParmas(url) {
    var obj = {};
    var index = url.indexOf('?') + 1;
    var str = url.substr(index);
    var arr = str.split('&');
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        obj[arr[0]] = arr[1];
    }
    return obj;
}