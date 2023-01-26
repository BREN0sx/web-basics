/**
 * description: Implementação simulada de Object.assign
 * param target [type] objeto de origem mesclado
 * param mergeObjArr [array] matriz de objetos para mesclar
 * return [Object] objeto mesclado
 */
Object.myAssign = function (target, ...mergeObjArr) {
  target = Object(target) // Tipos comuns são empacotados em objetos como strings, números, etc.
  for (let i = 0; i < mergeObjArr.length; i++) {
    // Filtre os casos em que os objetos a serem mesclados são nulos e indefinidos
    if (mergeObjArr[i] !== null || mergeObjArr[i] !== undefined) {
      // Iterar sobre as propriedades dos objetos a serem mesclados
      for (let key in mergeObjArr[i]) {
        // O operador in procurará propriedades enumeráveis ​​no objeto protótipo, portanto, você precisa filtrar as propriedades no objeto protótipo do objeto por meio do método Object.prototype.hasOwnProperty
        if (mergeObjArr[i].hasOwnProperty(key)) {
          target[key] = mergeObjArr[i][key]
        }
      }
    }
  }
  return target
}

// Código de amostra
const proto = { p: 'proto' }
const obj1 = { a: 'aa' }
const obj2 = { b: 'bb' }
// __proto__ com o objeto proto como o novo objeto
const obj3 = Object.create(proto, {
  c: {
    value: 'cc',
    enumerable: true,
  },
})
console.log(obj3) // {c: 'cc'}
// Gere o objeto protótipo do construtor de obj3
console.log(obj3.__proto__) // {p: 'proto'}



// Indica que as propriedades acima da cadeia de protótipo (__proto__) não serão mescladas
const t1 = Object.myAssign({}, obj1, obj2)
console.log(t1) // {a: "aa", b: "bb"}
// Filtre o caso em que o objeto mesclado é nulo ou indefinido
const t2 = Object.myAssign({}, obj1, null, obj2, undefined)
console.log(t2) // {a: "aa", b: "bb"}
// Mesclar atributos
const t3 = Object.myAssign({}, obj1, obj2, obj3)
console.log(t3) // {a: "aa", b: "bb", c: "cc"}
