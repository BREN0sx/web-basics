// Encontra todas as permutações e combinações de um array bidimensional [[A, B], [a, b], [1, 2]]

// entrada [[A, B], [a, b], [1, 2]]

// saída [Aa1, Aa2, Ab1, Ab2, Ba1, Ba2, Bb1, Bb2]

// Faça um loop no array antigo para se juntar aos novos elementos do array
const getResult = (arrA, arrB) => {
  if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
    return
  }
  if (arrA.length === 0) {
    return arrB
  }
  if (arrA.length === 0) {
    return arrA
  }
  const result = []
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      // Traversal dupla unindo membros antigos da matriz e novos membros da matriz
      result.push(String(arrA[i]) + String(arrB[j]))
    }
  }
  return result
}

// Array recursivo popping cada emendado com outros elementos
const findAll = (arr) => {
  if (arr.length === 1) {
    return arr[0]
  }
  const temp = arr.shift()
  return getResult(temp, findAll(arr))
}

// teste
const oldArr = [['A', 'B'], ['a', 'b'], ['1', '2']]

console.log('findAll', findAll(oldArr))
