self.addEventListener('message', function (e) {
    console.log("子线程接收到主线程的命令", e);
    var num = 0;
    timeITV();
    function timeITV() {
        var itv = setInterval(function () {
            var i = 0;
            if (i > 10) {
                clearInterval(itv);
                timeITV();
            } else {
                num++;
                self.postMessage(num);
            }
        }, 1000);
    }

}, false);
