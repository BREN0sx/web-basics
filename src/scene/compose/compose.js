// requisitos do tópico
// Implementa a função compose, semelhante ao modelo cebola do middleware do koa

let middleware = []
middleware.push((context, next) => {
  console.log(1)
  next()
  console.log(1.1)
})
middleware.push((context, next) => {
  console.log(2)
  next()
  console.log(2.1)
})
middleware.push((context, next) => {
  console.log(3)
  next()
  console.log(3.1)
})

let fn = compose(middleware)
fn()

/*
1
2
3
3.1
2.1
1.1
*/

function compose(middleware) {

}
