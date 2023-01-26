/* eslint-disable default-case */
/*
 * Author       : BREN0sx
 * Date         : 2021-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-01-12
 * FilePath     : /js-base/src/js/es6/generator.js
 * description  : Princípio de implementação do gerador
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// Princípio de implementação do gerador
// 1. O gerador pode ser entendido como uma máquina de estados, que encapsula vários estados internamente e retorna um objeto iterador Iterator ao mesmo tempo
// 2. O iterador pode ser chamado várias vezes para atingir a função da função de interrupção

// A função fonte é transformada no seguinte código
// function* foo() {
//   yield 'result1'
//   yield 'result2'
//   yield 'result3'
// }
// const gen = foo()
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

// 1. A função geradora divide o código em blocos switch-case de acordo com a instrução yield
// 2. Execute cada caso separadamente alternando _context.prev e _context.next
function gen$(_context) {
  while (1) {
    // Execute cada caso separadamente alternando _context.prev e _context.next
    switch ((_context.prev = _context.next)) {
      // As funções do gerador dividem o código em blocos switch-case com base em declarações de rendimento
      case 0:
        _context.next = 2
        return 'result1'

      case 2:
        _context.next = 4
        return 'result2'

      case 4:
        _context.next = 6
        return 'result3'

      case 6:
      case 'end':
        return _context.stop() // terminar
    }
  }
}

// Invocação de baixo perfil
const gen = function (activeFunction) {
  // Armazenar o estado de execução por meio deste objeto
  const context = {
    next: 0, // O local da próxima execução
    prev: 0, // O estado desta operação Quando o próximo é alternado
    done: false, // Está acabado?
    // função final
    stop: function stop() {
      this.done = true
    },
  }
  //Retorna um iterador que pode chamar next continuamente
  return {
    next() {
      // De acordo com o estado, obtenha o valor de retorno indefinido ou o próximo resultado da execução
      const value = context.done ? undefined : gen$(context)
      return {
        value,
        done: context.done, // estado de execução
      }
    },
  }
}

// teste de uso
const g = gen()
const res1 = g.next() // {value: "result1", done: false}
const res2 = g.next() // {value: "result2", done: false}
const res3 = g.next() // {value: "result3", done: false}
const res4 = g.next() // {value: undefined, done: true}
const res5 = g.next() // {value: undefined, done: true}
console.log('g', g, res1, res2, res3, res4, res5)
