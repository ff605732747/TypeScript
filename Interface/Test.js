function printLabel(LabelObject) {
    console.log(LabelObject.label);
}
printLabel({ label: "123" });
function creatSquare(config) {
    var area = {
        color: "red",
        area: 100
    };
    if (config.color) {
        area.color = config.color;
    }
    if (config.width) {
        area.area = config.width * config.width;
    }
    return area;
}
var mySearchFunc;
mySearchFunc = function (source, substring) {
    var result = source.search(substring), flag = true;
    if (-1 !== result) {
        flag = false;
    }
    return flag;
};
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("a");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("b");
    };
    return AnalogClock;
}());
var Digital = createClock(DigitalClock, 12, 7);
var Analog = createClock(AnalogClock, 12, 4);
