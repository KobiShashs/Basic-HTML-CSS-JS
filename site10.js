
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
