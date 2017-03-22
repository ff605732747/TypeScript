import { Greeter as model } from "./Greeter";

var greeter = new model(document.getElementById("content"));
greeter.start();

setTimeout(function () {
    greeter.stop();
    console.log("stop");
},5000)