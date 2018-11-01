$(function() {
    // 封装处理时间格式的方法
    function changeDate(datetimes) {
        var date = new Date(datetimes);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        //      h = date.getHours() + ':';
        //      m = date.getMinutes() + ':';
        //      s = date.getSeconds();
        //      年 月 日 时 分 秒
        return Y + M + D;
    }

    function changeDates(datetimes) {
        var date = new Date(datetimes);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        // 年 月 日 时 分 秒
        return Y + M + D + h + m + s;
    }

    function changeDateM(datetimes) {
        var date = new Date(datetimes);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        // D = date.getDate() + ' ';
        //      h = date.getHours() + ':';
        //      m = date.getMinutes() + ':';
        //      s = date.getSeconds();
        //      年 月 日 时 分 秒
        return Y + M;
    }
});