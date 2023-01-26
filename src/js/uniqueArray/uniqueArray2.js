/*
 * Author       : BREN0sx
 * Date         : 2021-09-13
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-01-16
 * FilePath     : /js-base/src/js/scence/uniqueArray/uniqueArray2.js
 * description  : O valor da chave do objeto da matriz é o mesmo que a desduplicação
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Desduplicar o valor da chave do elemento do objeto de matriz
const oldArr = [
  { id: 'BREN0sx', artist: 'O primeiro elemento com o mesmo valor de chave' },
  { id: 'BREN0sx', artist: 'O segundo elemento com o mesmo valor de chave' },
  { id: 'Sx', artist: 'dois objetos são idênticos' },
  { id: 'Sx', artist: 'dois objetos são idênticos' },
  { artist: 'Dois objetos são idênticos', id: 'Sx' }, // ordem diferente
  { id: 'em nome do Pai', artist: 'Jay Chou 1' },
  { artist: 'Jay Chou 2', id: 'em nome do Pai' },
  { id: 'Sete Lixiang', artist: 'Jay Chou' },
]

function unique(arr, key) {
  const result = {} // Os valores-chave dos objetos do elemento da matriz são os mesmos
  const finalResult = [] // matriz desduplicada
  // Atravesse a matriz para remover objetos duplicados com o mesmo valor de chave
  arr.forEach((item) => {
    result[item[key]] = item // id(ou outro nome de chave conhecido) é o nome da chave e o mesmo nome de chave substitui o anterior
  })
  // Obtenha o elemento de objeto da matriz do valor da chave do objeto
  for (const keyName in result) {
    finalResult.push(result[keyName])
  }
  return finalResult // Retorna matriz desduplicada
}
// Desduplicar objetos com o mesmo valor de id
console.log('Elementos subseqüentes com o mesmo valor de chave substituem os anteriores', unique(oldArr, 'id'))

// Elementos do objeto array Os anteriores cobrem os últimos
function unique2(arr, key) {
  const result = {}
  const finalResult = []
  arr.forEach((item) => {
    // Salve apenas a primeira ocorrência de um elemento de array
    if (result[item[key]] === undefined) {
      result[item[key]] = item
    }
  })
  for (const keyName in result) {
    finalResult.push(result[keyName])
  }
  return finalResult
}

console.log('Elementos na frente cobrem os elementos na parte de trás', unique2(oldArr, 'id'))

// JSON.stringify stringifica objetos para remover duplicatas
function unique3(arr) {
  const hash = {}
  arr.forEach((item) => {
    hash[JSON.stringify(item)] = item
  })
  // Atravessando objetos para extrair elementos
  arr = Object.keys(hash).map((key) => JSON.parse(key))
  return arr
}

console.log('Elemento de objeto simples para caractere para comparar', unique3(oldArr))
// Problema: A ordem dos objetos é diferente, e os valores stringificados de JSON.stringify são diferentes, portanto não podem ser comparados
// { id: "William Castle", artista: "Os dois objetos são exatamente iguais" },
// { id: "William Castle", artista: "Os dois objetos são exatamente iguais" },
// { artist: "Os dois objetos são exatamente iguais", id: "William Castle" }, // A ordem é diferente

