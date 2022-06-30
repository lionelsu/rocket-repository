/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual é o nome do aluno?");
let n1 = prompt("Qual é a nota da primeira prova?");
let n2 = prompt("Qual é a nota da segunda prova?");
let n3 = prompt("Qual é a nota da terceira prova?");

/* fazer a média */

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6

average = average.toFixed(1)

if (result) {
  alert("Parabéns " + student+"!"+ "\nSua média foi: " + average + "\nVocê passou de ano!")
} else {
  alert("Que pena! " + student+"..."+ "\nSua média foi: " + average + "\nVocê já está reprovado. \nEstude e reforce o conteúdo para a recuperação.")
}

/* MINHA SOLUÇÃO KKKKKK

n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

let result = (n1 + n2 + n3) / 3;

if (result > 6) {
  alert("Parabéns " + student+"!"+ "\nSua média foi: " + result + "\nVocê passou de ano!")
} else {
  alert("Que pena! " + student+"..."+ "\nSua média foi: " + result + "\nVocê já está reprovado. \nEstude e reforce o conteúdo para a recuperação.")
}
*/