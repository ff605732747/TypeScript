var Gretter = (function () {
    function Gretter(str) {
        this.str = str;
    }
    Gretter.prototype.greet = function () {
        return "<h1>" + this.str + "...</h1>";
    };
    return Gretter;
}());
var gretter = new Gretter("欢迎uu");
document.body.innerHTML = gretter.greet();
