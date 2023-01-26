/* eslint-disable no-proto */
/*
 * Author       : BREN0sx
 * Date         : 2021-07-30
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/intanceof.js
 * description  :  princípio de implementação instanceOf
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// Função: se um objeto está na cadeia de protótipo de outro objeto

//Ideia: o protótipo da variável à direita existe na cadeia de protótipos da variável à esquerda
function instanceOf(left, right) {
  let leftValue = left.__proto__
  const rightValue = right.prototype
  while (true) {
    if (leftValue === null) {
      return false // A cadeia de protótipo da variável à esquerda não foi encontrada
    }
    if (leftValue === rightValue) {
      return true //O protótipo da variável à direita está na cadeia de protótipos da variável à esquerda
    }
    leftValue = leftValue.__proto__ // Encontre o protótipo subjacente
  }
}
