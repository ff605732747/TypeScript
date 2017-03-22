export class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    dateNumber: number;

    constructor(element) {
        this.element = element;
        this.span = document.createElement("span");
        this.element.innerHTML += "现在的时间是";
        this.span.innerHTML = new Date().toUTCString();
        this.element.appendChild(this.span);
    }

    start() {
        this.dateNumber = setInterval(() => { this.span.innerHTML = new Date().toUTCString() }, 1000);
    }

    stop() {
        clearInterval(this.dateNumber);
    }


}