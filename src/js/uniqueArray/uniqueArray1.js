/*
 * Author       : BREN0sx
 * Date         : 2021-09-13
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-01-16
 * description  : Desduplicação de tipos básicos de array
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

const a = { test: 1 }
const oldArr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN', 0, 0, 'a', 'a', {}, {}, a, a]

// Desduplicação de tipo básico ES6
function unique(arr) {
  return Array.from(new Set(arr))
}
// Tipo básico Recomendado desta forma Simples e claro
console.log('es6 set', unique(oldArr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]

// includes
function unique3(arr) {
  if (!Array.isArray(arr)) return
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i])
    }
  }
  return array
}
// NaN é identificado e o objeto não é desduplicado, a solução correta
console.log('includes', unique3(oldArr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}, { test: 1 }]

// indexOf
function unique2(arr) {
  if (!Array.isArray(arr)) return
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}

// Desvantagem: NaN não pode ser reconhecido
console.log('indexOf', unique2(oldArr))
// // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}, { test: 1 }]
