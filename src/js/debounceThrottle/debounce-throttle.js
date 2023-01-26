/*
 * Author       : BREN0sx
 * Date         : 2021-07-30
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-12-09
 * FilePath     : /web-basics/src/js/debounceThrottle/debounce-throttle.js
 * description  : Versão aprimorada do estrangulamento anti-vibração e anti-vibração convencional, estrangulamento
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
//  Versão aprimorada de antivibração, antivibração + limitação
// Como o anti-vibração às vezes é acionado com muita frequência, não haverá resposta. Esperamos que uma resposta seja dada ao usuário em um horário fixo.
function throttlePlus(fn, delay, ...args1) {
  let last = 0
  let timer = null
  return function (...args2) {
    let now = new Date()
    if (now - last > delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(this, ...args1, ...args2)
      }, delay)
    } else {
      // Desta vez significa que o tempo acabou e uma resposta deve ser dada
      last = now
      fn.apply(this, ...args1, ...args2)
    }
  }
}

/**
 * @description: Função anti-vibração: execute o callback após n segundos após a função ser acionada, se ela for acionada novamente dentro desses n segundos, reinicie a cronometragem
 * @param {Function} fn função para executar
 * @param {Number} wait  Execute o retorno de chamada após esperar milissegundos
 * @param {*} ...params1 argumentos passados ​​para fn
 */
function debounce(fn, wait, ...params1) {
  let timer = null
  return function (...params2) {
    if (timer) {
      // Se houver uma função esperando para ser executada, limpe o cronômetro e comece a cronometrar novamente
      clearTimeout(timer)
      timer = null // Limpe o cronômetro e reinicie o cronômetro na próxima vez
    }
    // Definir temporizador/Reiniciar temporizador
    timer = setTimeout(() => {
      // Após o tempo de espera, durante a execução do callback, acione novamente o debounce, sendo necessário aguardar novamente
      fn.apply(this, ...params1, ...params2) // apply vincula o escopo de execução atual
    }, wait)
  }
}

// função para estabilizar
let actionFn = function (a, b) {
  console.log('ligar de volta', a, b)
}
const cb = debounce(actionFn, 500, 'parâmetro actionFn 1', 'parâmetro 2')
setInterval(cb, 1000) // Acionado após 1500ms pela primeira vez e depois a cada 1000ms
setInterval(debounce(actionFn, 2000), 1000) // Ele continua disparando repetidamente antes de ser executado e não será executado

/**
 * @description: Função de limitação: especifique uma unidade de tempo, dentro dessa unidade de tempo, apenas uma função de retorno de chamada que aciona um evento pode ser executada
 * @param {Function} fn função para executar
 * @param {Number} gapTime  Unidade de tempo
 * @param {*} ...arr argumentos passados ​​para fn
 */
function throttle(fn, gapTime, ...arr) {
  let last = 0 // Hora da última execução Executar imediatamente pela primeira vez
  return function (...params2) {
    let nowTime = Date.now() // hora atual
    // Current time - se o último tempo de execução exceder o intervalo de tempo, o callback será executado
    if (nowTime - last > gapTime) {
      fn.apply(this, ...arr, ...params2) // ...arr é o parâmetro de fn
      last = nowTime // Redefina o último horário de execução para o horário atual para facilitar a próxima execução
    }
  }
}

setInterval(throttle(actionFn, 1000, 'actionFn parâmetro 1', 'parâmetro 2'), 10)
// O acelerador será acionado a cada 10 milissegundos e o retorno de chamada actionFn será acionado a cada segundo (se for acionado novamente em 1 segundo, será descartado)
