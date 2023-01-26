/*
 * Author       : BREN0sx
 * Date         : 2021-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-09-12
 * FilePath     : /js-base/src/js/arrary-sort-modifiedBubbleSort.js
 * description  : Tipo de bolha
 * Valores maiores aparecem como bolhas subindo lentamente para a superfície
 * Ideia: travessia dupla, comparação adjacente, troca de posições se a frente for maior que a parte de trás.
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

function modifiedBubbleSort(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    // Cada elemento é comparado com outros elementos Traversal duplo
    const num = length - 1 - i //  Subtraia os valores da bolha já classificados acima para melhorar o desempenho
    for (let j = 0; j < num; j++) {
      //  Compare valores diferentes, troque de lugar
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // trocar de lugar
      }
    }
  }
}
// trocar de lugar
const oldArr = [3, 4, 5, 1, 2, 7, 8]

modifiedBubbleSort(oldArr)
console.log('Ordenar resultados', oldArr)
