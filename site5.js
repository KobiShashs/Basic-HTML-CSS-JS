const a = 10;
console.log("a="+a);

///console.log("b="+b);

function f(){
    a = 12;
    const b = 20;
    console.log("a="+a);
    console.log("b="+b);
    if(true){
     const c = 30;
     console.log("a="+a);
     console.log("b="+b);
     console.log("c="+c);

    }

    console.log("a="+a);
    console.log("b="+b);
    console.log("c="+c);
    


}





f()