/*
 * Author       : BREN0sx
 * Date         : 2022-10-28
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-11-04
 * FilePath     : /js-base/src/interview/alibaba.202110.js
 * description  : Perguntas da entrevista de Ali uma hora
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Dica: Esta pergunta é uma pergunta difícil do Leetcode
/**
 * Contar o número de letras com base em uma expressão
 * ilustrar:
 *   Dada uma expressão que descreve o número de letras, calcule o número real de cada letra na expressão
 *   Formato de expressão:
 *     Uma letra seguida por um número indicando o número de vezes, como A2B3
 *     Os parênteses permitem o agrupamento parcial de expressões seguidas de números, (A2)2B
 *     Pode ser padrão quando o número é 1, como AB3.
 * Exemplo:
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */
// pilha + tabela de hash
function countOfAtoms(formula) {

}
console.log(countOfAtoms('A2B3')) // { A: 2, B: 3 }
console.log(countOfAtoms('A(A3B)2')) // { A: 7, B: 2 }
console.log(countOfAtoms('C4(A(A3B)2)2')) // { A: 14, B: 4, C: 4 }

/**
 * Implemente um método `Foo` que receba uma função `func` e um tempo `wait`
 * Retorna uma nova função, a nova função será executada várias vezes seguidas, mas será executada apenas uma vez durante o tempo de espera
 */

function Foo(func, wait, ...params) {
}

/**
 * Achatamento de objeto
 * Observação: implemente a função flatten(input), a entrada é um objeto javascript (Object ou Array) e o valor de retorno é o resultado nivelado.
 * Exemplo:
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   A saída é a seguinte
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  O valor é nulo ou indefinido, descartado
 *  }
 */

const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
}
const flattenRes = flatten(input)
console.log('flattenRes', flattenRes)
// Achatamento de objeto
function flatten(obj) {
  const res = {}
  // Achatar um objeto
  const help = (target, oldKey) => {
    for (const key in target) {
      let newKey // Julgando a chave antiga
      if (oldKey) {
        // Recursivamente, tenha a chave antiga e depois combine
        if (Array.isArray(target)) {
          // A matriz torna-se key[0]
          newKey = `${oldKey}[${key}]`
        } else {
          // objeto: key.a
          newKey = `${oldKey}.${key}`
        }
      } else {
        // No caso de inicialização
        if (Array.isArray(target)) {
          // A matriz torna-se [0] [1]
          newKey = `[${key}]`
        } else {
          // Objeto torna-se 'a' 'b'
          newKey = key
        }
      }
      if (Object.prototype.toString.call(target[key]) === '[object Object]' || Array.isArray(target[key])) {
        // Matrizes recursivas e objetos passam em chaves antigas organizadas
        help(target[key], newKey)
      } else if (target[key] !== null && target[key] !== undefined) {
        // Saída recursiva atribuição direta de dados regulares
        res[newKey] = target[key]
      }
    }
  }
  help(obj, '')
  return res
}