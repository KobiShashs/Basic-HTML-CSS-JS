//Inline fucntion
function doSomething(callback) {
    callback(10, 20, 30);
}



doSomething(function (a, b, c) {
    console.log("Hello World");
    console.log(a + b + c);

});



doSomething(function (a, b, c) {
    console.log("Hello World");
    console.log(a * b * c);

});



