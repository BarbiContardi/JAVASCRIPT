const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

console.log(yearsCompleted == firstYearCompleted)
console.log(yearsCompleted === firstYearCompleted)


//El operador == solo compara el valor,
//entonces si decimos que yearsCompleted(1) == firstYearCompleted(true, por lo tanto 1) 
//a la hora de compararlo nos da como resultado true (porque 1 es igual a 1)

//El operador === compara el valor y el tipo, 
//entonces si decimos que yearsCompleted(1) === firstYearCompleted(true) nos dara false
//como resultado porque yearsCompleted es un Number y firstYearCompleted es un Boolean