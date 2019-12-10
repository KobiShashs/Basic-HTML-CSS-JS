
//Immediately invoked function expression 
(function doSomething(){//IIFE
    var x = 123;
    console.log(window.x);

    function f(){
        console.log("I'm inside f()....");
        
    }
    
    f();
})();

//doSomething();


var something = (function (){
    console.log("Hello Java 822.8 Haifa");
    return "Kobi";
})();

console.log(something);



//f();