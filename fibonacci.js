// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let numero = 4;
let fibonacci1 = 0;
let fibonacci2 = 1;
let fibonacci3 = 0;

if (numero === fibonacci1 || numero === fibonacci2) {
  console.log("Esta na sequencia");
}

for (let i = 2; fibonacci3 < numero; i++) {
  fibonacci3 = fibonacci1 + fibonacci2;
  if (fibonacci3 === numero) {
    console.log("Esta na sequencia");
    break;
  } else {
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci3;
  }
}

if (fibonacci3 !== numero) {
  console.log("Não esta na sequencia");
}
