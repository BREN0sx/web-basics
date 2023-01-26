/*
 * Author       : BREN0sx
 * Date         : 2021-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-09-12
 * FilePath     : /js-base/src/js/arrary-sort-selection.js
 * description  : tipo de seleção
 * Ideia: Encontre o subscrito do valor de destino e troque-o pelo subscrito do elemento atualmente percorrido.
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i // subscrito atual
    // j = i  i já está classificado
    for (let j = i; j < arr.length; j++) {
      //  Encontre o valor alvo Aqui está o valor mínimo ou outras condições de julgamento
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    //  O subscrito é diferente Troca com o subscrito do elemento atualmente percorrido.
    if (indexMin !== i) {
      [arr[indexMin], arr[i]] = [arr[i], arr[indexMin]]
    }
  }
}

// Usar
const oldArr = [3, 4, 5, 1, 2, 7, 8]

selectionSort(oldArr)
console.log('Ordenar resultados', oldArr)
