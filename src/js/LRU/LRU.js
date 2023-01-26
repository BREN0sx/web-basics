// algoritmo LRU

// Implementação de matriz LRU

// A solução geral é manter uma matriz, os elementos da matriz são objetos de pares chave-valor chave-valor e cada aquisição precisa percorrer a matriz
// Função de fábrica, com limite de armazenamento de capacidade de dois atributos, cache de armazenamento em cache
let LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = []
}

// Implemente o método get
LRUCache.prototype.get = function (key) {
  let index = this.cache.findIndex((item) => item.key === key)
  if (index === -1) {
    return -1
  }
  // Depois de deletar este elemento, insira-o no primeiro item do array
  let { value } = this.cache[index]
  this.cache.splice(index, 1)
  this.cache.unshift({
    key,
    value,
  })
  return value
}

// Implemente o método put
LRUCache.prototype.put = function (key, value) {
  let index = this.cache.findIndex((item) => item.key === key)
  // Os dados que você deseja inserir já existem, então você pode atualizá-los diretamente
  if (index > -1) {
    this.cache.splice(index, 1)
  } else if (this.cache.length >= this.capacity) {
    //Se o limite máximo foi atingido, primeiro elimine aquele que não é usado há mais tempo
    this.cache.pop()
  }
  this.cache.unshift({ key, value })
}


// implementação do LRU map


// Complexidade de tempo O(1), porque Map pode não apenas manter pares chave-valor, mas também lembrar a ordem de inserção.
let LRUCache2 = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

LRUCache2.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // no estado em que se encontra renova
    let temp = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, temp)
    return temp
  }
  return -1
}

LRUCache2.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // Atualizar como existe (adicionar após excluir)
    this.cache.delete(key)
  } else if (this.cache.size >= this.capacity) {
    // junta-se se não existir
    // Se o cache ultrapassar o valor máximo, remova os que não foram usados ​​recentemente
    // new Map().keys() retorna um novo objeto Iterator
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
}
