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
