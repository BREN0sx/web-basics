// Pinduoduo pdd-20211109 Questão 2
// Diz a saída e explica porque

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
