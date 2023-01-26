/* eslint-disable no-await-in-loop */
/*
 * Author       : BREN0sx
 * Date         : 2021-10-13 14:45:44
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 15:58:01
 * FilePath     : /js-base/src/scene/traffic-lights.js
 * description  : algoritmo de semáforo
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Existem amarelo, verde e vermelho, e a duração de suas respectivas luzes é de 1s, 2s, 3s e assim por diante.
// Também existem funções como início da pausa:https://juejin.cn/post/6844903784187953159


function timePromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}
async function setColor(i, color) {
  console.log('definir cor', color)
  await timePromise(i)
}

async function run() {
  // Um loop while é usado aqui, a recursão também é possível
  while (true) {
    await setColor(3000, 'red')
    await setColor(2000, 'green')
    await setColor(1000, 'yellow')
  }
}

run()
