$(function(){

    var getAbsPos = function(o) {
        var pos = {x:0, y:0};
        while (o!=null) {
            pos.x += o.offsetLeft;
            pos.y += o.offsetTop;
            o = o.offsetParent;
        }
        return pos;
    }

    var videos = document.getElementsByTagName("video"),
    fraction = 0.8;

    function checkScroll() {

        for(var i = 0; i < videos.length; i++) {

            var video = videos[i];
            var pos = getAbsPos(video);

            var x = pos.x, y = pos.y, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
                b = y + h, //bottom
                visibleX, visibleY, visible;

                visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
                visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

                visible = visibleX * visibleY / (w * h);

                if (visible > fraction) {
                    video.play();
                } else {
                    video.pause();
                }

        }

    }

    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('resize', checkScroll, false);

});