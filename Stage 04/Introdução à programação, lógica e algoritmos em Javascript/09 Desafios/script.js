//constante para a lista de estudantes e suas notas.
const STUDANTS = [
  {
    name: "Nagato",
    grade1: 9,
    grade2: 10,
  },
  {
    name: "Yamato",
    grade1: 8,
    grade2: 7,
  },
  {
    name: "Musashi",
    grade1: 5,
    grade2: 10,
  },
  {
    name: "Mutsu",
    grade1: 7,
    grade2: 3,
  },
]

//função que recebe as notas e retorna a média das duas.
function average(grade1, grade2) {
  return ((grade1 + grade2)/2).toFixed(1);
}

//esta função vai verificar usar a variável abaixo como parâmetro para retornar os valores a seguir. Esta função também vai verificar se o número da média é maior que 7, se sim ou não, é imprimido uma mensagem
function printStudantAverage(studant) {
  
  let printTest = average(studant.grade1, studant.grade2)

  if (printTest >= 7) {
  return `A média da aluna ${studant.name} é igual há: ${average(studant.grade1, studant.grade2)}. \n Parabéns, ${studant.name}! Você foi aprovado!`
  } else {
  return `A média da aluna ${studant.name} é igual há: ${average(studant.grade1, studant.grade2)}. \n Que pena, ${studant.name}! Você reprovou...`
  }
}

//este laço de repetição vai alimentar a variável studant com o objeto STUDANTS e armazenalos em outra variável para escrever a mensagem.

for (let studant of STUDANTS) {
  let averageMessage = printStudantAverage(studant)
  alert(averageMessage);
}

/*let numberOne = Number(prompt("Digite o primeiro número"));
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
}*/