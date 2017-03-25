class Gretter {
    private str: string;
    constructor(str) {
        this.str = str;
    }
    greet() {
        return `<h1>${this.str}...</h1>`
    }
}

var gretter = new Gretter("欢迎uu");
document.body.innerHTML = gretter.greet();