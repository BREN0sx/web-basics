/*
 * Author       : BREN0sx
 * Date         : 2021-10-27
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-10-27
 * FilePath     : /js-base/src/scene/ promise-allsettled.js
 * description  : promise.allsettled polify
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Dois lados do Pequeno Livro Vermelho
// Explicação: A matriz está cheia de tarefas assíncronas e os resultados de todas as tarefas assíncronas são retornados independentemente do sucesso

// Compila o array e executa o resultado
Promise.allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let total = 0
    const resArr = []
    // Promessas em loop
    promises.forEach((item, index) => {
      // Cumprir a promessa
      Promise.resolve(item).then((res) => {
        resArr[index] = {
          status: 'fulfilled',
          value: res,
        }
        // Registre a quantidade concluída e retorne o resultado quando a quantidade for atingida
        total++
        if (total === promises.length) {
          resolve(resArr)
        }
      }).catch((err) => {
        resArr[index] = {
          status: 'rejected',
          value: err,
        }
        total++
        if (total === promises.length) {
          resolve(resArr)
        }
      })
    })
  })
}

// Matriz de reescrita
Promise.allSettled = function (promises) {
  // Reescreva cada promessa para retornar o resultado ao elemento da matriz para que tudo seja bem-sucedido
  const mappedPromises = promises.map((p) => p
    .then((value) => ({
      // Retornar o resultado diretamente
      status: 'fulfilled',
      value,
    }))
    .catch((reason) => ({
      // Retornar o resultado diretamente
      status: 'rejected',
      value: reason,
    })))
  return Promise.all(mappedPromises)
}
