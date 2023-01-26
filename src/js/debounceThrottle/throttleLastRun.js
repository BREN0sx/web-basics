/**
 * @description: O último gatilho da função do acelerador deve chamar
 * @param {Function} fn função para executar
 * @param {Number} gapTime  Unidade de tempo
 * @param {*} ...arr argumentos passados ​​para fn
 */
function throttleLastRun(fn, gapTime, ...arr) {
  let last = 0 // Hora da última execução Executar imediatamente pela primeira vez
  let timeout
  return function (...params2) {
    let nowTime = Date.now() // hora atual
    // Current time - se o último tempo de execução exceder o intervalo de tempo, o callback será executado
    let params = [...arr, ...params2]
    if (nowTime - last > gapTime) {
      clearTimeout(timeout) // limpar último
      fn.apply(this, params) // ...arr é o parâmetro de fn
      last = nowTime //Redefina o último horário de execução para o horário atual para facilitar a próxima execução
    } else {
      clearTimeout(timeout) // Limpe a última vez anterior e altere esta hora para a última vez
      // A última vez deve ser executada, se não for executada antes da próxima execução, execute a última vez
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, params)
      }, gapTime)
    }
  }
}

// função para estabilizar
let actionFn = function (a, b) {
  console.log('ligar de volta', a, b)
}
setInterval(throttleLastRun(actionFn, 1000, 'parâmetro actionFn 1', 'parâmetro 2'), 500)
