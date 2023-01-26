/*
 * Author       : BREN0sx
 * Date         : 2023-01-25
 * LastEditors  : BREN0sx
 * LastEditTime : 2023-01-25
 * FilePath     : /js-base/src/subject/ali-baoxian.js
 * description  : Perguntas escritas do lado do Departamento de Seguros Financeiros da Ant
 * Marque uma consulta e ligue para uma entrevista, e dê uma hora para fazer quatro perguntas de teste escrito
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Uma hora

// Tópico 1
// Escreva a função convert(money), passe o valor e converta o valor em notação de milésimos, como entrada 1293213 e saída 1.293.213
const convert = function (money) {

}
console.log('convert', convert(1293213))



// Tópico 2 Complete a função convert2(list) para converter lista

/**
 * @param list {object[]},
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */

function convert2(list, parentKey, currentKey, rootValue) {

}

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

const result = convert2(list, 'parentId', 'id', 0)
console.log('convert', JSON.stringify(result))



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



// Tópico 3
// Dada uma matriz não classificada de inteiros, encontre o comprimento da sequência contígua mais longa.
// Exemplo:
// Entrada: [100, 4, 200, 1, 3, 2]
// Saída: 4
// Explicação: A sequência contígua mais longa é [1, 2, 3, 4]. Tem comprimento 4.
const longestConsecutive = function (nums) {

}

console.log('longestConsecutive', longestConsecutive([100, 4, 200, 1, 3, 2]))




// Tópico 4
// Implemente um mecanismo de modelo simples (com e sem substituição)

// Usar substituir
function template(str) {

}

// Não substitua
// function template(str) {

// }

const tpl = template('<p>hey there {{ name }} {{ name }}</p>')
const res = tpl({ name: 'Neo' })

console.log('template', res)








// Olhe atentamente para a resposta
// Olhe atentamente para a resposta
// Olhe atentamente para a resposta
// Olhe atentamente para a resposta















// //Tópico 1
// //Escreva a função convert(money), passe o valor e converta o valor em notação de milésimos, como entrada 1293213 e saída 1.293.213
// const convert = function(money) {
//   // Ponto decimal
//   let [integer, decimal] = String.prototype.split.call(money, '.')
//   let s = String(integer) // Números são geralmente convertidos em caracteres
//   let arr = []
//   let j = 0; // Se o número correspondente ao ciclo atual é um múltiplo de 3
//   // Emenda reversa
//   for (var i = s.length - 1; i >= 0; i--) {
//     arr.push(s[i])
//     j++
//     // Se for múltiplo de 3 e houver um número na frente, adicione um,
//     if (j % 3 == 0 && i !== 0) {
//       arr.push(',')
//     }
//   }
//   // Array reverso para string
//   integer = arr.reverse().join('')
//   // ponto decimal
//   if (decimal) {
//     integer = `${integer}.${decimal}`
//   }

//   return integer
// }
// console.log('convert', convert(1293213))



// // Tópico 2 Complete a função convert2(list) para converter lista

// /**
//  * @param list {object[]},
//  * @param parentKey {string}
//  * @param currentKey {string}
//  * @param rootValue {any}
//  * @return object
//  */

// function convert2(list, parentKey, currentKey, rootValue) {
//   // Inicialização da estrutura de dados
//   let obj = {
//     [currentKey]: rootValue,
//     children: []
//   }
//   let num = 0

//   // Para todos os nós adicionados à estrutura pai
//   while (num !== list.length) {
//     list.forEach((item, index) => {
//       if (!item) return
//       // Coletar o mais externo
//       if (item[parentKey] === obj[currentKey]) {
//         obj.children.push({
//           ...item,
//           children: []
//         })
//         list[index] = null
//         num++
//       } else {
//         // Encontrar níveis recursivamente
//         helpFn(item, index, obj.children)
//       }
//       // Encontrar níveis recursivamente
//     })
//   }
//   // Adicionar hierarquia ao item
//   function helpFn(item, initIndex, arr) {
//     // Encontrar nível atual
//     let index = arr.findIndex(ele => ele[currentKey] === item[parentKey])
//     if (index !== -1) {
//       arr[index].children.push({
//         ...item,
//         children: []
//       })
//       list[initIndex] = null
//       num++
//       return true
//     }
//     // Encontrar elementos de seu subconjunto
//     for (let ele of arr.values()) {
//       if (helpFn(item, index, ele.children)) {
//         // Encontre o nível do item Cancelar recursão
//         return true
//       }
//     }
//   }
//   return obj
// }

// const list = [
//   {
//     "id": 19,
//     "parentId": 0,
//   },
//   {
//     "id": 18,
//     "parentId": 16,
//   },
//   {
//     "id": 17,
//     "parentId": 16,
//   },
//   {
//     "id": 16,
//     "parentId": 0,
//   }
// ];

// const result = convert2(list, 'parentId', 'id', 0);
// console.log('convert', JSON.stringify(result))



// const tree = {
//   "id": 0,
//   "children": [
//     {
//       "id": 19,
//       "parentId": 0
//     },
//     {
//       "id": 16,
//       "parentId": 0,
//       "children": [

//         {
//           "id": 18,
//           "parentId": 16
//         },
//         {
//           "id": 17,
//           "parentId": 16
//         }
//       ]
//     }
//   ]
// }



// //Tópico 3
// //Dada uma matriz não classificada de inteiros, encontre o comprimento da sequência contígua mais longa.
// //Exemplo:
// //Entrada: [100, 4, 200, 1, 3, 2]
// //Saída: 4
// //Explicação: A sequência contígua mais longa é [1, 2, 3, 4]. Tem comprimento 4.
// const longestConsecutive = function(nums) {
//   nums.sort((a, b) => a - b)
//   let max = 0
//   let total = 1 // O comprimento da sequência contínua atual é padronizado para 1
//   let before = null //  O valor anterior é usado para determinar se é uma sequência contínua
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       before = nums[i]
//       continue
//     }
//     // É uma sequência contínua
//     if (nums[i] === before + 1) {
//       total++
//       max = Math.max(total, max)
//     } else {
//       // É uma sequência contínua
//       total = 1
//     }
//     before = nums[i]
//   }
//   return max
// };

// console.log('longestConsecutive', longestConsecutive([100, 4, 200, 1, 3, 2]))




// //Tópico 4
// //Implemente um mecanismo de modelo simples (com e sem substituição)

// // Usar substituir
// function template(str) {
//   return function(obj) {
//     for (let key in obj) {
//       let reg = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
//       str = str.replace(reg, obj[key])
//     }
//     return str
//   }
// }

// // Maneira do Vue: soletrar strings Compilar com nova função + com mecanismo de modelo
// // Combine, intercepte a string e coloque-a no array
// function template(str) {
//   return function(obj) {
//     let arr = []
//     let reg = new RegExp(`{{\\s*(.+?)\\s*}}`);
//     // Combine {{}} para adicionar caracteres a arr
//     while (str.length) {
//       let res = reg.exec(str)
//       if (res) {
//         let noMatch = str.slice(0, res.index)
//         str = str.slice(res.index)
//         // A parte que não combinava antes
//         arr.push(`_s('${noMatch}')`)
//         // Combine com {{ key }} para obter a chave
//         arr.push(`_getValue('${res[1]}')`)
//         str = str.slice(res[0].length)
//       } else {
//         // Não combina
//         arr.push(`_s('${str}')`)
//         str = ''
//       }
//     }
//     // Obter o valor de obj
//     obj._getValue = function(key) {
//       return this[key]
//     }
//     // Stringify
//     obj._s = function(val) {
//       if (typeof val === 'object') return JSON.stringify(val);
//       return val
//     }
//     // arr: ['<p>hey there ', 'name', ' ', 'name', '</p>']
//     let code = arr.join('+')
//     let render = new Function(`with(this){return _s(${code})}`)
//     // Vincule isso para apontar e executar
//     let template = render.call(obj)
//     return template
//   }
// }


// var tpl = template('<p>hey there {{ name }} {{ name }}</p>');
// let res = tpl({ name: 'Neo' });

// console.log('template', res)
