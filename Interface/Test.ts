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

