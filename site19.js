// Inline Function in action

function doSomething(x) {
    x();
}


doSomething(function () { console.log("Hello World") });


doSomething(function () { console.log("Moshe") });


doSomething(function () {
    var x = 2;
    console.log(Math.pow(x, 2))
}
);