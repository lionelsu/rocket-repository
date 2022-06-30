let numberOne = Number(prompt("Digite o primeiro número"));
let numberTwo = Number(prompt("Digite o segundo número"));

const SUM = numberOne + numberTwo;
const SUBTRACTION = numberOne - numberTwo;
const MULTIPLICATION = numberOne * numberTwo;
const DIVISION = numberOne / numberTwo;
const REST_OF_DIVISION = numberOne % numberTwo;

alert(`O resultado da soma é ${SUM}`);
alert(`O resultado da subtração é ${SUBTRACTION}`);
alert(`O resultado da multiplicação é ${DIVISION}`);
alert(`O resultado da divisão é ${DIVISION}`);
alert(`O resultado do resto da divisão é ${REST_OF_DIVISION}`);

let oven = SUM;
if (oven%2==0) {
  alert(`A soma dos dois números é par`)
} else {
  alert(`A soma dos dois números é impar`)
}

if(numberOne === numberTwo) {
  alert(`Os dois números são iguais`)
} else {
  alert(`Os dois números são diferentes`)
}