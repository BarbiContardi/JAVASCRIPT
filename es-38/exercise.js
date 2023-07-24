function printName() {
    let helloName = "Hello John";
    setTimeout(function () {}, 1000);  //esto no me queda claro, me funciona pero me parece que no esta bien escrito
  
    function inner() {
      console.log(helloName);
    }
  
    inner();
  }
  printName();
  