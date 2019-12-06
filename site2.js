var a = 10;

if(a>5){
    console.log("a is larger than 5");
    
}else{
    console.log("a is not larger than 5");
}


if(a){
  console.log("a is true");
    
}else{
    console.log("a is false");
    
}

a=0;
if(a){
    console.log("a is true");
      
  }else{
      console.log("a is false");
      
  }

  if(undefined){
    console.log("undefined is true");
  }else{
    console.log("undefined is false");
  }


  if(null){
    console.log("null is true");
  }else{
    console.log("null is false");
  }


  
  if(false){
    console.log("false is true");
  }else{
    console.log("false is false");
  }

  
//abstract comparison
  console.log("0==false",0==false)
  console.log("undefined==false",undefined==false)
  console.log("undefined==''",undefined=="")
  console.log("undefined==null",undefined==null)
  console.log("false==''",false=="")
  console.log("0==''",0=="")
 console.log("****************************************************");

  //strict comparison
  console.log("0===false",0===false)
  console.log("undefined===false",undefined===false)
  console.log("undefined===''",undefined==="")
  console.log("undefined===null",undefined===null)
  console.log("false===''",false==="")
  console.log("0===''",0==="")