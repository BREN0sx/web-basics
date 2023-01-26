/*
 * Author       : BREN0sx
 * Date         : 2021-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-09-12
 * FilePath     : /js-base/src/es6/await.js
 * description  : await princípio de implementação: Promise executa recursivamente a função geradora automaticamente
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Entenda a execução do gerador
// 1. Obtenha o iterador
// 2. Executa continuamente g.next
// 3. Até terminar é verdadeiro

function* myGenerator() {
  const params1 = yield '1'
  const params2 = yield '2'
  const params3 = yield '3'
  console.log('params1', params1, params2, params3)
  return 'last'
}

// obter iterador
const gen = myGenerator()

const d = gen.next() // { value: '1', done: false }
const d1 = gen.next('test1') // { value: '2', done: false }
const d2 = gen.next('test2') // { value: '3', done: false }
const d3 = gen.next('test3') // { value: 'last', done: true }

console.log(d, d1, d2, d3)

// aguarda princípio de implementação: executa automaticamente a função do gerador
function run(gen) {
  return new Promise((resolve, reject) => {
    const g = gen() // Obtém o iterador O iterador será atualizado toda vez que next for executado.
    // A execução recursiva do iterador usa a promessa de suspender a execução de forma assíncrona
    function step(val) {
      let res = null
      try {
        res = g.next(val) // Executa a próxima iteração para obter o resultado do await
      } catch (err) {
        return reject(err)
      }
      // Determine o final do iterador, encerre a recursão e retorne o resultado geral da resolução de await
      if (res.done) {
        resolve(res.value)
        return
      }
      // Aguarde a conclusão da Promise, execute automaticamente o próximo próximo e passe o valor de resolve
      Promise.resolve(res.value)
        .then((val) => {
          step(val)
        })
        .catch((err) => {
          g.throw(err)
        })
    }
    step() // primeira execução
  })
}

// código de teste

function* testGeneratorAwait() {
  try {
    const res = yield Promise.resolve(1)
    const res2 = yield 2
    const res3 = yield Promise.resolve(3)
    console.log(res, res2, res3) // 1 2 3
    return 4
  } catch (error) {
    console.log('retorno de chamada de falha', error)
  }
}

console.log('código de teste')
run(testGeneratorAwait)
  .then((res) => {
    console.log('aguardo conclusão da execução', res)
  })
  .catch((err) => {
    console.log('aguardo erro')
  })
