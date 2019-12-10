//Callback is similar to Interface in Java

function doSomething(callback){
    callback({name:"koko",age:3,color:"Red"});//Literal Object
}

doSomething(dog=>console.log(dog));

doSomething(dog=>console.log(dog.name,dog.age,dog.color));