/*
 * Author       : BREN0sx
 * Date         : 2022-10-11
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-11-04
 * FilePath     : /js-base/src/interview/weimeng.js
 * description  :  Lado de Weimeng
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

const arr = [{
  id: 0,
  data: 1,
}, {
  pid: 0,
  id: 1,
  data: 2,
}, {
  pid: 0,
  id: 2,
  data: 3,
}, {
  pid: 2,
  id: 3,
  data: 4,
}, {
  pid: 3,
  id: 4,
  data: 5,
}]

// const tree = [{
//     id: 0,
//     data: 1,
//     children: [
//         {
//             pid: 0,
//             id: 1,
//             data: 2,
//         },

//         {
//             pid: 0,
//             id: 2,
//             data: 3,
//             children: [
//                 {
//                     pid: 2,
//                     id: 3,
//                     data: 4
//                 }
//             ]
//         },
//     ]
// }]

function toTree(arr) {

}


const toTreeArr = toTree(arr)
console.log('checkoutArr', JSON.stringify(toTreeArr))





//A implementação de uma função que excede um determinado tempo falhará de forma assíncrona

// Código suplementar
function timeout(fn, time) {
}

// const newFetch = timeout(fetch, 10000);

// newFetch('https://foo.com')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('data', data);
//     })
//     .catch((e) => {
//         console.log('Tempo esgotado', e);
//     });