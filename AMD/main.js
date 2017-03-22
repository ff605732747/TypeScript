define(["require", "exports", "./test/greeter"], function (require, exports, model) {
    "use strict";
    exports.__esModule = true;
    var el = document.getElementById('main');
    var greeter = new model.Greeter(el);
    greeter.start();
});
