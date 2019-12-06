function f(){
    this.x = 123;
    console.log(this);
    
}

let obj = new f();
console.log(obj);
