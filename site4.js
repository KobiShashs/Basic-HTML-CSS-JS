let a = 10;

console.log("a="+a); //10

///console.log("b="+b);

function f(){

    let b = 20;
    console.log("a="+a); //10
    console.log("b="+b); //20
    if(true){
     var c = 30;
     console.log("a="+a);//10
     console.log("b="+b);//20
     console.log("c="+c);//30

    }

    console.log("a="+a); //10
    console.log("b="+b); //20
    console.log("c="+c);//Error
    


}





f()