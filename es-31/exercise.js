function sayHelloName(callback) {
    console.log("Hello");
    callback();
  }
  
  function printName() {
    console.log("Barbara");
  }
  
  sayHelloName(printName);