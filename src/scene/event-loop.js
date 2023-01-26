/*
 * @Author       : BREN0sx
 * @Date         : 2021-09-10 11:14:30
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-09-11 16:39:02
 * FilePath     : /js-base/src/scene/ecent-loop.js
 * @description  : Prioridade prática da tarefa de loop de eventos
 * Domine a prioridade dessas tarefas: setTimeout, promessa.nextTick, setImmediate, promessa,
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
//


// responda abaixo
setImmediate(() => {
  console.log(1)
}, 0)
setTimeout(() => {
  console.log(2)
}, 0)
new Promise((resolve) => {
  console.log(3)
  resolve()
  console.log(4)
}).then(() => {
  console.log(5)
})
async function test() {
  const a = await 9
  console.log(a)
  const b = await new Promise((resolve) => {
    resolve(10)
  })
  console.log(b)
}
test()
console.log(6)
process.nextTick(() => {
  console.log(7)
})
console.log(8)






































// 微任务：nextTick比then优先级高      宏任务：setTimeout优先级比setImmediate高
// process.nextTick > promise.then  >  setTimeout > setImmediate
// 注意await也是promise 但是需要一个个promise添加进去 所以同一个await里面的promise的顺序可能被其他的promise插队
// 解析：https://www.jianshu.com/p/a39d3e878d06
// 答案：3 4 6 8 7 5 2 1
