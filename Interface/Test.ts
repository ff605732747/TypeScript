interface LabelValue {
    label: string;
}

function printLabel(LabelObject: LabelValue) {
    console.log(LabelObject.label);
}

printLabel({ label: "123" });



/**
 * 可选属性options bags
 * @interface SquareConfig
 */
interface SquareConfig {
    width: number;
    color: string;
}

function creatSquare(config: SquareConfig): { color: string, area: number } {
    let area = {
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

/**
 * 只读属性
 * @interface
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

/**
 * 函数类型
 * @interface SearchFunc
 */
interface SearchFunc {
    (source: string, substring: string): boolean;
}

var mySearchFunc: SearchFunc;
mySearchFunc = function (source, substring) {
    let result = source.search(substring),
        flag = true;
    if (-1 !== result) {
        flag = false;
    }
    return flag;
}

//类类型
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log("a");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log("b");
    }
}


var Digital = createClock(DigitalClock, 12, 7);
var Analog = createClock(AnalogClock, 12, 4);

interface Shape {
    color: string;
}

interface Square extends Shape {
    width: number;
}


let square = <Square>{};
square.color = "red";
square.width = 100;


interface Counter {
    (start: number): Counter;
    interval: number;
    reset();
}

function getCounter(): Counter {
    let counter = <Counter>function (start) {
        console.log(start);
    }
    counter.interval = 1;
    counter.reset = function () {
        console.log("_~-");
    }
    return counter;
}

