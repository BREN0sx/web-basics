/*
 * Author       : BREN0sx
 * Date         : 2022-10-15
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-11-04
 * FilePath     : /js-base/interview/kuaishou.js
 * description  : Lado rápido
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Eu demorei cerca de meia hora para escrever
// A segunda pergunta não está bem escrita


// algoritmo LRU

// Implementação de matriz LRU

// // A solução geral é manter uma matriz, os elementos da matriz são objetos de pares chave-valor chave-valor e cada aquisição precisa percorrer a matriz
// // Função de fábrica, com limite de armazenamento de capacidade de dois atributos, cache de armazenamento em cache
// let LRUCache = function(capacity){
//     this.capacity = capacity;
//     this.cache = [];
//  }

//  // Implemente o método get
//  LRUCache.prototype.get = function (key) {
//    let index = this.cache.findIndex((item) => item.key === key);
//    if (index === -1) {
//      return -1;
//    }
//    // Depois de deletar este elemento, insira-o no primeiro item do array
//    let value = this.cache[index].value;
//    this.cache.splice(index, 1);
//    this.cache.unshift({
//      key,
//      value,
//    });
//    return value;
//  };

//  // Implemente o método get
//  LRUCache.prototype.put = function (key, value) {
//    let index = this.cache.findIndex((item) => item.key === key);
//    // Os dados que você deseja inserir já existem, então você pode atualizá-los diretamente
//    if (index > -1) {
//      this.cache.splice(index, 1);
//    } else if (this.cache.length >= this.capacity) {
//      // Se o limite máximo foi atingido, primeiro elimine aquele que não é usado há mais tempo
//      this.cache.pop();
//    }
//    this.cache.unshift({ key, value });
//  };


// implementação do LRU map


// // O código acima vem do mecanismo oficial de cache LRU
// // Complexidade de tempo O(1), porque Map pode não apenas manter pares chave-valor, mas também lembrar a ordem de inserção.
// var LRUCache = function(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
// };

// LRUCache.prototype.get = function(key) {
//     if (this.cache.has(key)) {
//         // No estado em que se encontra renova
//         let temp = this.cache.get(key);
//         this.cache.delete(key);
//         this.cache.set(key, temp);
//         return temp;
//     }
//     return -1;
// };

// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.has(key)) {
//         // Atualizar como existe (adicionar após excluir)
//         this.cache.delete(key);
//     } else if (this.cache.size >= this.capacity) {
//         // Junte-se se não existir
//         // Se o cache exceder o valor máximo, remova os que não foram usados ​​recentemente
//         // new Map().keys() retorna um novo objeto Iterator
//         this.cache.delete(this.cache.keys().next().value);
//     }
//     this.cache.set(key, value);
// };

// TODO: Isso parece bastante problemático




/**
 * API simulada
 */
const mockApi = (() => {
  let id = 0
  return async (req) => {
    await new Promise((r) => setTimeout(r, 1000))
    return {
      req,
      id: id++,
    }
  }
})()

// Para ser realizado
function cacheApi() {
}

/**
 * interface de cache
 */
const cachedApi = cacheApi(mockApi);

(async () => {
  console.log('111',
    await Promise.all([cachedApi('a'), cachedApi('b'), cachedApi('a')]))
  // saída após um segundo [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]

  console.log(
    await Promise.all([cachedApi('a'), cachedApi('b'), cachedApi('a')]),
  )
  // saída imediatamente [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]

  await new Promise((r) => setTimeout(r, 1000))
  console.log(
    await Promise.all([cachedApi('a'), cachedApi('b'), cachedApi('a')]),
  )
  // saída imediatamente [ { req: "a", id: 2 }, { req: "b", id: 3 }, { req: "a", id: 2 } ]
})()



// dois lados

// Tarefas assíncronas, controle o número de simultaneidade
// Endereço do código：src/scene/task-concurrent.js







// Olhe atentamente para a resposta







/**
 * interface assíncrona de cache
 * - Quando a interface de cache é solicitada pela primeira vez, o efeito é o mesmo que chamar a interface assíncrona original
 * - A interface de cache armazena em cache o valor de retorno da interface assíncrona original de acordo com os parâmetros de entrada
 * - Quando houver um valor em cache, retorne imediatamente o valor em cache e inicie uma solicitação para atualizar o valor em cache
 * - Para o mesmo parâmetro de entrada, a interface de cache iniciará apenas uma solicitação ao mesmo tempo
 * @param fn interface assíncrona original
 * @returns interface de cache
 */
//  function cacheApi(...args) {
//     // Implementação de código suplementar
//     let map = {}
//     let list = []
//     let fn = args[0]
//     return async function help(key) {
//         // Existe apenas uma interface ao mesmo tempo, julgando o bloqueio
//         if (map[key] && map[key].lock === true) {
//             // A interface já tem um valor, retorne a interface diretamente
//             if (map[key].data) {
//                 return map[key].data
//             } else {
//                 // A interface está fazendo sua primeira solicitação
//                return await map[key].promise
//             }
//         }
//         // inicialização
//         if (!map[key]) {
//             map[key] = {}
//             // Armazene em cache a mesma promessa com o mesmo parâmetro e aguarde a conclusão
//             map[key].promise = fn(key)
//             map[key].lock = true
//             map[key].data = null
//         }

//         // retornar valor em cache
//         if (map[key].data) {
//             map[key].lock = true
//             map[key].promise = fn(key)
//             // Altere os dados de forma assíncrona na próxima vez
//             map[key].promise.then(res => {
//                 map[key].data = res
//                 map[key].lock = false
//             })
//             return map[key].data
//         } else {
//             // primeiro pedido
//             let res = await map[key].promise
//             map[key].data = res
//             map[key].lock = false
//             return res
//         }
//     }
// }