/* 
  Capturar 2 números
  e fazer as operações matemáticas de 
  soma, subtração, multiplicação, divisão e resto da divisão.

  E para cada operação, mostrar um alerta com o resultado.
*/

let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

/* 
também poderia ser feito da seguinte forma
let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

o resultado é o mesmo, mas desta forma, o código fica mais legivel em troca de ocupar mais linhas de código.
*/

const SUM = numberOne + numberTwo;
const SUBTRACTION = numberOne - numberTwo;
const MULTIPLICATION = numberOne * numberTwo;
const DIVISION = numberOne / numberTwo;
const REST_OF_DIVISION = numberOne % numberTwo;

alert("O resultado da soma é " + SUM);
alert("O resultado da subtração é " + SUBTRACTION);
alert("O resultado da multiplicação é " + MULTIPLICATION);
alert("O resultado da divisão é " + DIVISION);
alert("O resultado do resto da divisão é " + REST_OF_DIVISION);