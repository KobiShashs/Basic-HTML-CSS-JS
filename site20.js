//Inline fucntion

function doSomething(callback){
    callback();
}



doSomething(function () { console.log("Hello World") });


doSomething(function () { console.log("Moshe") });


doSomething(function () {
    var x = 2;
    console.log(Math.pow(x, 2))
}
);