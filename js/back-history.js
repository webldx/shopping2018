$(function() {
    document.onkeyup = function(e) {

        if (e.keyCode == 8) {
            history.back(-1);
        }
    }
});