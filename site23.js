
function doSomething(Dog,callback){
    
    callback(Dog);
}

doSomething(dog=>console.log(dog));

doSomething(dog=>console.log(dog.name,dog.age,dog.color));