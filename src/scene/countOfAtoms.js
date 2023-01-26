/*
 * Author       : BREN0sx
 * Date         : 2021-10-29 15:16:56
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-10-29 15:19:01
 * FilePath     : /js-base/src/scene/countOfAtoms.js
 * description  : Contar o número de letras com base em uma expressão
 * Perguntas da entrevista Ali - perguntas difíceis do leetcode
 * Este é um problema de leetcode, um problema difícil
 * Ligeiramente alterado, mudou a saída final 726 questões
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
//
//

/**
* Calcule o número de letras de acordo com a expressão
 * ilustrar:
 * Dada uma expressão que descreve o número de letras, calcule o número real de cada letra na expressão
 * Formato de expressão:
 * Uma letra seguida de um número indicando o número de vezes, como A2B3
 * Os colchetes podem agrupar parcialmente expressões seguidas de números, (A2)2B
 * Pode ser padrão quando o número for 1, como AB3.
 * Exemplo:
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */

// Problemas Difíceis do Leetcode

function countOfAtoms(formula) {

}

console.log(countOfAtoms('A2B3')) // { A: 2, B: 3 }
console.log(countOfAtoms('A(A3B)2')) // { A: 7, B: 2 }
console.log(countOfAtoms('C4(A(A3B)2)2')) // { A: 14, B: 4, C: 4 }

// Cuidado com a resposta

// pilha + tabela de hash
// function countOfAtoms(formula) {
//     let i = 0;
//     const n = formula.length;

//     const stack = [new Map()] // Initialize empurra uma pilha vazia
//     while (i < n) {
//         const ch = formula[i]
//         // analisar uma string de letras consecutivas
//         function parseAtom() {
//             const sb = []
//             sb.push(formula[i++]); // digitalizar iniciais
//             // Digitalizar letras minúsculas após a inicial
//             while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
//                 sb.push(formula[i++])
//             }
//             return sb.join('');
//         }
//         // analisando números
//         const parseNum = () => {
//             // No final || não é um número, tratado como 1
//             if (i === n || isNaN(Number(formula[i]))) {
//                 return 1
//             }
//             // obter números
//             let num = 0
//             while (i < n && !isNaN(Number(formula[i]))) {
//                 const base = num * 10 // Se for um número de vários dígitos, expanda-o dez vezes
//                 const now = Number(formula[i]) // números atuais
//                 num = base + now // digitalizar números
//                 i++
//             }
//             return num
//         }

//         if (ch === '(') {
//             i++;
//             // Adicionar nível de parênteses
//             stack.unshift(new Map()) // Empurre uma tabela de hash vazia para a pilha, pronta para contar o número de átomos entre parênteses
//         } else if (ch === ')') {
//             i++
//             const num = parseNum() // Números à direita dos parênteses
//             // Reduza os níveis de parênteses
//             const popMap = stack.shift() // Pop o número de átomos entre parênteses
//             const topMap = stack[0]
//             // O número na pilha é mesclado com a pilha inicializada e o número de letras
//             for (const [atom, count] of popMap.entries()) {
//                 let beforeNum = topMap.get(atom) || 0 // Inicialize o valor anterior na pilha
//                 let nowNum = count * num // O valor na pilha é multiplicado pelo múltiplo
//                 topMap.set(atom, nowNum + beforeNum) // Multiplique o número de átomos entre parênteses por num e adicione ao número de átomos na camada anterior
//             }
//         } else {
//             const atom = parseAtom() // se a letra é seguida por um número
//             const num = parseNum() // Mesclar o nível mais externo na primeira pilha
//             // Mesclar o nível mais externo na primeira pilha
//             const topMap = stack[0]
//             topMap.set(atom, (topMap.get(atom) || 0) + num)

//         }
//     }
//     // Finalmente mesclado na primeira pilha
//     let map = stack.pop()
//     return Object.fromEntries(map.entries()) // map转对象
// }
