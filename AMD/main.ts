import model = require("./test/greeter");

var el = document.getElementById('main');
var greeter = new model.Greeter(el);
greeter.start();


