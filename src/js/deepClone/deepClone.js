/* eslint-disable no-prototype-builtins */
/*
 * Author       : BREN0sx
 * Date         : 2021-08-06
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/deepClone.js
 * description  : cópia profunda
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// cópia profunda
// 1. Processamento regular de tipo de tempo
// 2. O valor normal da função retorna
// 3. Resolva o problema de referência circular

function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj
  if (obj instanceof RegExp) return new RegExp(obj) // Lidar com dados de tipo regular
  if (obj instanceof Date) return new Date(obj) // Tratamento de dados de tipo de tempo
  if (typeof obj !== 'object') return obj // função de retorno etc. valor normal
  if (hash.has(obj)) return hash.get(obj) //  Consultar referências circulares
  const copy = new obj.constructor() //  Instanciar arrays e objetos de acordo com o construtor
  hash.set(obj, copy) // Defina o valor de hash para consultar referências circulares
  for (const key in obj) {
    // Propriedade do objeto circular Valor da cadeia do protótipo Nenhuma cópia
    if (obj.hasOwnProperty(key)) {
      //  cópia recursiva de loop
      copy[key] = deepClone(obj[key], hash)
    }
  }
  return copy
}
