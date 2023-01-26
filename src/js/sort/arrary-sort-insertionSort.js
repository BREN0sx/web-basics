/*
 * Author       : BREN0sx
 * Date         : 2021-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/arrary-sort-insertionSort.js
 * description  : tipo de inserção
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// Na minha opinião este é o melhor dos tipos básicos
// Porque quando você arrumar, vai ser da frente para trás
// É da linha da frente para a de trás, a linha da frente é tudo que você já arrumou
// Aqueles que não atendem às condições são movidos para trás, para que você possa encontrar rapidamente alguns valores que atendem às condições

// Ideia: Organize um elemento por vez e compare os novos elementos adiante
// Menor que o anterior, o anterior é movido para trás e todos os elementos são organizados em ordem.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i // A posição classificada atual compara os seguintes valores com os anteriores
    let temp = arr[i] // o valor a inserir
    //  critérios de filtro
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1] // Mova o valor anterior que não atende às condições para trás
      j-- // e atualizar o índice
    }
    // O valor antes do final da travessia é maior que o valor inserido
    arr[j] = temp
  }
}

// Usar
const oldArr = [3, 4, 5, 1, 2, 7, 8]

insertionSort(oldArr)
console.log('Ordenar resultados', oldArr)
