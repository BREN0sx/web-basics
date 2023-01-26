/* eslint-disable no-extend-native */
/*
 * Author       : BREN0sx
 * Date         : 2022-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-11-04
 * FilePath     : /js-base/src/js/arrary-function.js
 * description  : Princípio de implementação do método array forEach, mapa de filtro reduz alguns a cada

 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// implementação forEach

Array.prototype.myForEach = function (fn, thisArgs) {
  if (typeof fn !== 'function') throw 'Error in params'
  const len = this.length // O número de percursos é determinado no início do percurso. Adicionar, excluir, modificar e verificar elementos não afetará o número de percursos
  //  Traversal usa callbacks para passar parâmetros
  for (let i = 0; i < len; i++) {
    fn.call(thisArgs, this[i], i, this)
  }
}

// Usar
const oldArr = [1, 2, 3, 4, 5]

oldArr.myForEach((item, index, arr) => {
  console.log('myForEach', item, index, arr)
})

// implementação de filtro
Array.prototype.myFilter = function (callBack) {
  const newArr = []
  // 1. Circuito
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    // 2. Execute o retorno de chamada para atender à condição e adicione-o
    if (callBack(item)) {
      newArr.push(item)
    }
  }
  return newArr // 3. Retorne uma nova matriz
}

// Usar
const oldFilterArr = [1, 2, 3, 4, 5]

const filterNewArr = oldFilterArr.myFilter((item) => item <= 3) // Filtro 3 e abaixo

console.log('Filtro reescrever', filterNewArr)

// Implementação do map
Array.prototype.myMap = function (callBack) {
  const newArr = []
  // 1. Circuito
  for (let i = 0; i < this.length; i++) {
    // 2. Execute o retorno de chamada e adicione o valor de retorno do retorno de chamada
    const newItem = callBack(this[i])
    newArr.push(newItem)
  }
  return newArr // 3. Retorne uma nova matriz
}

const oldMapArr = [1, 2, 3, 4, 5]

const newMapArr = oldMapArr.myMap((item) => `Manipulação de elemento ${item}`)

console.log('reescrita do map', newMapArr)

// reduzir princípio de implementação
Array.prototype.myReduce = function (callBack, pre) {
  // 1. Circuito
  for (let i = 0; i < this.length; i++) {
    if (pre !== undefined) {
      // 2. Passe o pré existente e o valor do ciclo atual para atribuir ao pré
      pre = callBack(pre, this[i], i, this)
    } else {
      // 3. Se pre não for passado, passe o item atual do array como pre e aumente o ponteiro
      pre = callBack(this[i], this[i + 1], i, this)
      i++
    }
  }
  return pre // 4. Retorne ao pré
}

const oldReduce = [1, 2, 3, 4, 5]

const reduceRes = oldReduce.myReduce((prev, curr, index) => prev + curr, 0)

console.log('Reduza a reescrita', reduceRes)

// Algum princípio de implementação
Array.prototype.mySome = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      return true // Existe um elemento que cumpre os requisitos Servir
    }
  }
  return false
}

const oldSome = [1, 2, 3, 4, 5]
// Retorna verdadeiro se houver um valor maior que 4
const someIsTrue = oldSome.mySome((item) => item > 4)

console.log('Alguns reescrevem', someIsTrue)

// Cada princípio de implementação
Array.prototype.myEvery = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (!callBack(this[i])) {
      return false // Falha se houver um erro de elemento
    }
  }
  return true
}

const everyArr = [1, 2, 3, 4, 5]

const everyIsTrue = everyArr.myEvery((item) => item > 0)

console.log('Cada reescrita', everyIsTrue)
