// Scope:
var a = 10;
console.log("a = "+a);

function f(){

    var b=20;

    console.log("a = "+a);//Closure
    console.log("b = "+b);

    if(true){

        var c= 30;
        console.log("a = "+a);
        a=44;
        console.log("b = "+b);
        console.log("c = "+c);
    }

    console.log("c = "+c); 

}

f();

console.log("a = "+a);