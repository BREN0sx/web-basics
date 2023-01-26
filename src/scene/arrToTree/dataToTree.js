/*
 * Author       : BREN0sx
 * Date         : 2021-10-27
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/scene/dataToTree.js
 * description  : Dados do array para a estrutura da tree
 * Existem muitas variantes do tipo de dados desta questão e todas as empresas gostam de produzir
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */


// Ant Financial Services-Insurance Questões de um lado do teste escrito
// interview/ali-baoxian.js

//Tópico 2 Complete a função convert2(list) para converter lista



// dados de origem
const list = [
  {
    id: 19,
    parentId: 0,
  },
  {
    id: 18,
    parentId: 16,
  },
  {
    id: 17,
    parentId: 16,
  },
  {
    id: 16,
    parentId: 0,
  },
]

// Estrutura de dados convertida

const tree = {
  id: 0,
  children: [
    {
      id: 19,
      parentId: 0,
    },
    {
      id: 16,
      parentId: 0,
      children: [

        {
          id: 18,
          parentId: 16,
        },
        {
          id: 17,
          parentId: 16,
        },
      ],
    },
  ],
}

/**
 * @param list {object[]},
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */
function convert2(list, parentKey, currentKey, rootValue) {

}
const result = convert2(list, 'parentId', 'id', 0)
console.log('convert', JSON.stringify(result))


// Lado de Weimeng

// dados de origem
const arr = [{
  id: 0,
  data: 1,
}, {
  pid: 0,
  id: 1,
  data: 2,
}, {
  pid: 0,
  id: 2,
  data: 3,
}, {
  pid: 2,
  id: 3,
  data: 4,
}]

// const tree = [{
//     id: 0,
//     data: 1,
//     children: [
//         {
//             pid: 0,
//             id: 1,
//             data: 2,
//         },

//         {
//             pid: 0,
//             id: 2,
//             data: 3,
//             children: [
//                 {
//                     pid: 2,
//                     id: 3,
//                     data: 4
//                 }
//             ]
//         },
//     ]
// }]

function toTree(arr) {

}













// Cuidado com a resposta


// Ant Financeira - Seguros

// function convert2(list, parentKey, currentKey, rootValue) {
//     // inicialização da estrutura de dados
//     let obj = {
//         [currentKey]: rootValue,
//         children: []
//     }
//     let num = 0

//     // Para todos os nós adicionados à estrutura pai
//     while (num !== list.length) {
//         list.forEach((item, index) => {
//             if (!item) return
//             // coletar o mais externo
//             if (item[parentKey] === obj[currentKey]) {
//                 obj.children.push({
//                     ...item,
//                     children: []
//                 })
//                 list[index] = null
//                 num++
//             } else {
//                 // Encontrar níveis recursivamente
//                 helpFn(item, index, obj.children)
//             }
//             // Encontrar níveis recursivamente
//         })
//     }
//     // Adicionar hierarquia ao item
//     function helpFn(item, initIndex, arr) {
//         // encontrar nível atual
//         let index = arr.findIndex(ele => ele[currentKey] === item[parentKey])
//         if (index !== -1) {
//             arr[index].children.push({
//                 ...item,
//                 children: []
//             })
//             list[initIndex] = null
//             num++
//             return true
//         }
//         // Encontre elementos de seus filhos
//         for (let ele of arr.values()) {
//             if (helpFn(item, index, ele.children)) {
//                 // Encontre o nível do item Cancelar recursão
//                 return true
//             }
//         }
//     }
//     return obj
// }


// Lado de Weimeng

// ciclo
// function toTree(arr) {
//     const cache = {} // tabela de mapeamento do map
//     const result = [] // resultado da inicialização
//     // construir tabela de mapeamento
//     arr.forEach((item) => {
//         cache[item.id] = item
//     })
//     arr.forEach((item) => {
//         const parent = cache[item.pid]
//         if (!parent) {
//             result.push(item) // Inicialmente adicione elementos
//         } else {
//             // Os filhos que adicionam este elemento ao elemento pai são adicionados ao elemento pai por meio do mecanismo de referência do ponteiro do objeto
//             ; (parent.children || (parent.children = [])).push(item)
//         }
//     })
//     // dados de origem
//     return result
// }

// // recursão
// function checkoutArr(oldArr) {
//     let newArr = []
//     function helpFn(item, arr) {
//         if (item.pid === undefined) {
//             newArr.push({
//                 ...item,
//                 children: []
//             })
//             return true
//         }
//         let index = arr.findIndex(arrItem => {
//             return item.pid === arrItem.id
//         })
//         if (index !== -1) {
//             arr[index].children.push({
//                 ...item,
//                 children: []
//             })
//             return true
//         }
//         // não encontrou
//         for (let ele of arr.values()) {
//             if (helpFn(item, ele.children)) return true
//         }
//     }
//     oldArr.forEach(element => {
//         helpFn(element, newArr)
//     });
//     return newArr
// }
