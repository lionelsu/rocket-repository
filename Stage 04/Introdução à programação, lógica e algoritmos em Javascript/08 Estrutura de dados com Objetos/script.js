/* 
1. Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos.
*/

/* Um objeto no JS é criado com par de chaves '{ }' e dentro delas, em cada linha,
colocamos os objetos, conforme abaixo. 
*/

/*
2. Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC


 ***peso / (altura * altura)

*/

/* 1.
const PATIENTS = [
  {
    name: "Agano",
    age: 18,
    weight: 57,
    height: 173,
  },
  {
    name: "Takao",
    age: 21,
    weight: 73,
    height: 186,
  },
  {
    name: "Noshiro",
    age: 18,
    weight: 59,
    height: 169,
  },
]

let patientsNames = [];

for(let patient of PATIENTS) {
  patientsNames.push(`

  Nome do paciente: ${patient.name}. 
  Sua idade: ${patient.age}. 
  Seu peso: ${patient.weight}. 
  Sua altura: ${patient.height}.`)
}

alert(patientsNames)
*/

const PATIENTS = [
  {
    name: "Agano",
    age: 18,
    weight: 57,
    height: 173,
  },
  {
    name: "Takao",
    age: 21,
    weight: 73,
    height: 186,
  },
  {
    name: "Noshiro",
    age: 18,
    weight: 59,
    height: 169,
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100)**2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of PATIENTS) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}