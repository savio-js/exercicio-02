/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

const students = [
  {
    name: "Joao",
    n1: 5,
    n2: 2,
  },
  {
    name: "Marcos",
    n1: 7,
    n2: 8,
  },
  {
    name: "Matheus",
    n1: 2,
    n2: 10,
  },
  {
    name: "Maria",
    n1: 8,
    n2: 10,
  },
]

function media(n1, n2) {
  return (n1 + n2) / 2
}


function printMedia(students) {
  return `
  A média do(a) aluno(a) ${students.name} é ${media(students.n1, students.n2)} 
  `
}


for (let student of students) {
  let MediaMessage = printMedia(student)
  if (media(student.n1, student.n2) >= 7) {
    let aprovado = `Parabéns ${student.name}, você foi aprovado(a) no concurso`
    alert(MediaMessage + aprovado)
  } else {
    let reprovado = `Infelizmente ${student.name}, você foi reprovado(a) no concurso`
    alert(MediaMessage + reprovado)
  }
}