let primitive = true;

switch (typeof(primitive)) {
    case "string":
        console.log("La variable es tipo string")
    break;
    case "number":
        console.log("La variable es tipo number");
    break;
    case "boolean":
        console.log("La variable es tipo boolean");
    break;    
    default: 
    console.log("El tipo de variable no existe");     
}
