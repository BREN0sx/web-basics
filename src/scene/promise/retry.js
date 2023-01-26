/* eslint-disable no-async-promise-executor */
/* eslint-disable no-await-in-loop */

// Tópico: Implementar Promise.retry, resolver o resultado após o sucesso, tentar novamente após a falha e rejeitar após tentar mais de um determinado número de vezes

Promise.retry = function (promiseFn, times = 3) {

}

// Simulando promessas
function getProm() {
  const n = Math.random()
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000)
  })
}
Promise.retry(getProm)

// Olhe atentamente para a resposta














































// /**
//  * @description: 请求重试
//  * @param {type} promiseFn
//  * @param {type} times
//  * @param {type} reject
//  */
// Promise.retry = function (promiseFn, times = 3) {
//   return new Promise(async (resolve, reject) => {
//     // 重试次数
//     while (times--) {
//       try {
//         let ret = await promiseFn()
//         // 执行成功直接返回
//         resolve(ret)
//         break
//       } catch (error) {
//         // 重试机会
//         console.log(`还剩${times}`)
//         if (!times) {
//           // 重试结束，抛出错误
//           reject(error)
//         }
//       }
//     }
//   })
// }
