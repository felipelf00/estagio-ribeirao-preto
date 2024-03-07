// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
//a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência
// de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// Retornar true se num pertence à sequência de Fibonacci, ou false se não.

function fibonacci(num) {
  let t1 = 0;
  let t2 = 1;

  while (t1 <= num) {
    if (t1 === num) return true;

    let temp = t1;
    t1 = t2;
    t2 = t1 + temp;
  }
  return false;
}

console.log("13: " + fibonacci(13)); // true
console.log("20: " + fibonacci(20)); // false
console.log("34: " + fibonacci(34)); // true
