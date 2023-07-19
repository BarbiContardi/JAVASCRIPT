let primitive = true;

if(typeof(primitive) === "string"){
    console.log("La variable es tipo string");
}else if(typeof(primitive) === "number"){
    console.log("La variable es tipo number");
}else if(typeof(primitive) === "boolean"){
    console.log("La variable es tipo boolean");
}else{
    console.log("El tipo de variable no existe");
}
