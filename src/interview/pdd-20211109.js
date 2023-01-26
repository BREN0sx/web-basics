/*
 * Author       : BREN0sx
 * Date         : 2022-11-09
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-11-09
 * description  : Engenheiro de P&D Pinduoduo-h5/Mini Programa - Kuai Tuan Tuan Direção
 */

// Primeira pergunta
// Diga a saída e explique por quê

function Foo() {
  Foo.prototype.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.a = function () {
  console.log(3)
}
Foo.prototype.a = function () {
  console.log(4)
}
Foo.a()
let obj = new Foo()
obj.a()
Foo.prototype.a()

// Segunda questão
// Diga a saída e explique por quê

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
async1()
Promise.resolve(1)
  .then((res) => {
    console.log('promise1', res)
  })
  .then((res) => {
    console.log('promise2', res)
    return Promise.reject(1)
  })
  .then((res) => {
    console.log('promise3', res)
  })
  .catch((e) => {
    console.log('promise4', e)
  })
  .then((res) => {
    console.log('promise5', res)
  })
console.log('script end')


// Terceira pergunta
// Insira uma string composta por '(' ')' '[' ']' '{' '}' para determinar se está correto
// Digitar '()[{}]' true
// '({[}])' false

// Primeiro fale sobre a ideia e depois implemente o código

function test(str) {

}

// quarta pergunta
// Encontre os dois valores na matriz que somam o alvo
// arr = [ 2, 14, -2 ,9,10,-5,7] target = 9
// Emita o subscrito do valor correspondente: [0,6]

// Primeiro fale sobre a ideia e depois implemente o código

function findTarget(arr, target) {

}