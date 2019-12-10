
//JavaScript Module

"use strict";

var Dog = (function (){
    function Dog (name,age,color) {
        this.name= name,
        this.age= age,
        this.color= color
    }

    return Dog;
})();

