/*
 * Author       : BREN0sx
 * Date         : 2021-10-29 16:12:55
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 16:06:16
 * FilePath     : /js-base/src/scene/flattenObj.js
 * description  : achatamento de objeto
 * A entrevista de Ali questiona a terceira pergunta
 * Endereço: alibaba.202110.js
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

/**
 * achatamento de objeto
 * Observação: implemente a função flatten(input), a entrada é um objeto javascript (Object ou Array) e o valor de retorno é o resultado nivelado.
 * Exemplo:
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   A saída é a seguinte
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  O valor é nulo ou indefinido, descartado
 *  }
 */

const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
}
const flattenRes = flattenObj(input)
console.log('flattenRes', flattenRes)
// achatamento de objeto

function flattenObj(obj) {
}

// responda com cuidado
// Cuidado com a resposta
// Cuidado com a resposta

// function flattenObj(obj) {
//     let res = {}
//     // achatar um objeto
//     const help = (target, oldKey) => {
//         for (let key in target) {
//             let newKey; // Julgando a chave antiga
//             if (oldKey) {
//                 // Recursivamente, tenha a chave antiga e depois combine
//                 if (Array.isArray(target)) {
//                     // array fica key[0]
//                     newKey = `${oldKey}[${key}]`
//                 } else {
//                     // objeto: key.a
//                     newKey = `${oldKey}.${key}`
//                 }
//             } else {
//                 // No caso de inicialização
//                 if (Array.isArray(target)) {
//                     // A matriz torna-se [0] [1]
//                     newKey = `[${key}]`
//                 } else {
//                     // objeto torna-se 'a' 'b'
//                     newKey = key
//                 }
//             }
//             if (Object.prototype.toString.call(target[key]) === '[object Object]' || Array.isArray(target[key])) {
//                 // Matrizes recursivas e objetos passam em chaves antigas organizadas
//                 help(target[key], newKey)
//             } else if (target[key] !== null && target[key] !== undefined) {
//                 // saída recursiva atribuição direta de dados regulares
//                 res[newKey] = target[key]
//             }
//         }
//     }
//     help(obj, '')
//     return res
// }
