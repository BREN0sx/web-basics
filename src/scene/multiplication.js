/*
 * Author       : BREN0sx
 * Date         : 2021-10-11 18:39:34
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 16:04:22
 * FilePath     : /js-base/src/scene/multiplication.js
 * description  : Cache de Multiplicação e Multiplicação
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Multiplique todos os parâmetros
// multiplication(1, 2 , 3) = 1 * 2 * 3 = 6
function multiplication() {
}

console.log('res', multiplication(1, 2, 3))

// Implementa o cache de multiplicação
// saída de cache 1, 2, 3, próxima vez 2, 3, 1 também pode obter o resultado diretamente
function multiplicationCatch() {
}

let multiplicationCatchInstance = multiplicationCatch()


console.log('multiplicationCatch', multiplicationCatchInstance(1, 2, 3), multiplicationCatchInstance(2, 3, 1))















// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看














// 实现累乘
// function multiplication(...params) {
//     const res = params.reduce((cur, next) => {
//         return cur * next
//     }, 1)
//     return res
// }


// // 思路：排序， 字符串化， 存在对象里面
// // 取值、计算

// // 累乘 缓存
// function multiplicationCatch() {
//     let map = {}
//     return function(...params) {
//         params.sort((a, b) => a - b) // 排序参数
//         let key = params.join(',')
//         // 是否有缓存
//         if (map[key]) {
//             return map[key]
//         } else {
//             // 没缓存过
//             const res = params.reduce((cur, next) => {
//                 return cur * next
//             }, 1)
//             map[key] = res
//             return res
//         }
//     }
// }
// let multiplicationCatchInstance = multiplicationCatch()


// console.log('multiplicationCatch', multiplicationCatchInstance(1, 2, 3), multiplicationCatchInstance(2, 3, 1))
