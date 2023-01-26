/*
 * Author       : BREN0sx
 * Date         : 2022-01-16 15:44:54
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-01-16 15:46:41
 * FilePath     : /js-base/src/scene/template.js
 * description  : Implemente um mecanismo de modelo simples (com e sem substituição)
 * Copyright (c) 2022 by BREN0sx, All Rights Reserved.
 */

// Ant Financial - Departamento de Seguros

// Implementa um mecanismo de modelo simples (com e sem substituição)

function template(str) {

}

// não substitua
// function template(str) {

// }

const tpl = template('<p>hey there {{ name }} {{ name }}</p>')
const res = tpl({ name: 'Neo' })

console.log('template', res)







// Cuidado com a resposta
// Cuidado com a resposta
// Cuidado com a resposta
// Cuidado com a resposta

















// Usar substituir
// function template(str) {
//     return function(obj) {
//       for (let key in obj) {
//         let reg = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
//         str = str.replace(reg, obj[key])
//       }
//       return str
//     }
//   }

//   // Maneira do Vue: soletrar strings Compilar com nova função + com mecanismo de modelo
// // Corresponde, intercepta a string e a coloca no array
//   function template(str) {
//     return function(obj) {
//       let arr = []
//       let reg = new RegExp(`{{\\s*(.+?)\\s*}}`);
//       // Combine {{}} para adicionar caracteres a arr
//       while (str.length) {
//         let res = reg.exec(str)
//         if (res) {
//           let noMatch = str.slice(0, res.index)
//           str = str.slice(res.index)
//           // A parte que não combinava antes
//           arr.push(`_s('${noMatch}')`)
//           // Combine com {{ key }} para obter a chave
//           arr.push(`_getValue('${res[1]}')`)
//           str = str.slice(res[0].length)
//         } else {
//           // não combina
//           arr.push(`_s('${str}')`)
//           str = ''
//         }
//       }
//       // Obter o valor de obj
//       obj._getValue = function(key) {
//         return this[key]
//       }
//       // Stringify
//       obj._s = function(val) {
//         if (typeof val === 'object') return JSON.stringify(val);
//         return val
//       }
//       // arr: ['<p>hey there ', 'name', ' ', 'name', '</p>']
//       let code = arr.join('+')
//       let render = new Function(`with(this){return _s(${code})}`)
//       // Vincule isso para apontar e executar
//       let template = render.call(obj)
//       return template
//     }
//   }


//   var tpl = template('<p>hey there {{ name }} {{ name }}</p>');
//   let res = tpl({ name: 'Neo' });

//   console.log('template', res)
