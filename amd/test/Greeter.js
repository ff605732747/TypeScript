define(["require", "exports"], function (require, exports) {
    "use strict";
    var Greeter = (function () {
        function Greeter(element) {
            this.element = element;
            this.span = document.createElement("span");
            this.element.innerHTML += "现在的时间是";
            this.span.innerHTML = new Date().toUTCString();
            this.element.appendChild(this.span);
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.dateNumber = setInterval(function () { _this.span.innerHTML = new Date().toUTCString(); }, 1000);
        };
        Greeter.prototype.stop = function () {
            clearInterval(this.dateNumber);
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
