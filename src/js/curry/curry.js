/*
 * Author       : BREN0sx
 * Date         : 2022-07-30
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-09-11
 * FilePath     : /js-base/src/js/curry.js
 * description  : função currying
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Ideia: compare os parâmetros da função, se for insuficiente, a função de retorno aguarda receber os parâmetros, se for suficiente, execute-a
function curry(fn, ...args) {
  //  comparar parâmetros
  if (args.length < fn.length) {
    //  função de retorno esperando para receber parâmetros
    return function (...args2) {
      return curry(fn, ...args, ...args2)
    }
  }
  //  Os parâmetros da função são suficientes para executar a função e retornar o resultado
  return fn.apply(this, args)
}

// Usar
function sum(a, b, c, d) {
  return a + b + c + d
}
const curriedSum = curry(sum, 1) // Salvar funções e parâmetros
const res = curriedSum(2) // Salve o segundo parâmetro com a função sum
const res2 = res(3) // Salve o 3º parâmetro
// Passe o quarto parâmetro. O parâmetro é suficiente. Execute a função e retorne o resultado da execução. Não é possível passar mais parâmetros.
const res3 = res2(4)
console.log('res', curriedSum, res, res2, res3)
