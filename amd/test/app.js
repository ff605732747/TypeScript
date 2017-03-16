define(["require", "exports", "./Greeter"], function (require, exports, Greeter_1) {
    "use strict";
    var greeter = new Greeter_1.Greeter(document.getElementById("content"));
    greeter.start();
    setTimeout(function () {
        greeter.stop();
        console.log("stop");
    }, 5000);
});
