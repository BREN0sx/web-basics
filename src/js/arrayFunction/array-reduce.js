// O princípio de implementação de reduzir
Array.prototype.reduce1 = function (cb, prev) {
  for (let i = 0; i < this.length; i++) {
    if (prev === undefined) {
      // Nenhum valor é passado no início Use o primeiro elemento como anterior e o seguinte como atual
      prev = cb(this[i], this[i + 1], i + 1, this)
      i++ // aumentar ponteiro
    } else {
      prev = cb(prev, this[i], i, this) // O valor de retorno é armazenado em anterior e passado no próximo loop
    }
  }
  return prev // resultado de retorno
}

// Uso
const res = [1, 2, 3, 4, 5].reduce1((prev, curr, index, arr) => prev + curr)

// expansão de matriz multidimensional
const flatFnn = (arr) => arr.reduce(
  (prev, curr) => (Array.isArray(curr) ? prev.concat(flatFnn(curr)) : prev.concat(curr)), [],
)

let oldArr = [1, [2, [3, [4, [5]]]]]
let newArr = flatFnn(oldArr)
console.log('newArr', newArr)



// Implemente a função de combinação compose

// Execute de trás para frente e retorne os resultados em sequência
// const compose = (...fns) => {
//     return (...args) => {
//         const lastFn = fns.pop() // função de busca
//         const firstRes = lastFn(...args) // primeiro resultado
//         return fns.reduceRight((pre, now) =>{
//             return now(pre) // Passar o resultado da última execução Executar a função atual
//         }, firstRes)
//     }
// }

// Execute a função do wrapper anterior Use o encerramento para armazenar em cache a execução da função
const compose = (...fns) => {
  // Retorna uma função anterior envolvendo a seguinte execução da função
  return fns.reduce((a, b) => {
    // retornar uma função armazenar parâmetros
    return (...args) => a(b(...args))
  })
}






const fn1 = function (a, b) {
  return a + b
}

const fn2 = function (str) {
  return `${str} A segunda função manipula`
}

const fn3 = function (str) {
  return `${str} A terceira função de processamento`
}
const final = compose(fn3, fn2, fn1) // A função de recepção corre de trás para a frente
const res2 = final('a', 'b') // Executar sequencialmente Retornar resultados
console.log('res', res2)
