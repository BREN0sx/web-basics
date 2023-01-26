/*
 * Author       : BREN0sx
 * Date         : 2021-11-09 17:54:53
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-09 18:02:16
 * description  : Determine se a string composta de símbolos está correta
 */



// terceira pergunta
// Insira uma string composta por '(' ')' '[' ']' '{' '}' para determinar se está correto
// entrada '()[{}]' verdadeiro
// '({[}])' falso

//Primeiro fale sobre a ideia e depois implemente o código

function test(str) {

}


// Cuidado com a resposta
// Cuidado com a resposta
// Cuidado com a resposta
// Cuidado com a resposta
// Cuidado com a resposta




// Insira uma string consistindo em '(' ')' '[' ']' '{' '}' para determinar se está correto
// entrada '()[{}]' verdadeiro
// '({[}])' falso

// function test(str) {
//     let stack = []
//     // Mapeamento de caracteres de fechamento e abertura
//     let hash = {
//         ')': '(',
//         ']': '[',
//         '}': '{',
//     }
//     for (let i = 0; i < str.length; i++) {
//         let item = str[i]
//         let isClose = hash[item] // Caractere final Caractere inicial correspondente
//         // se fechado
//         if (isClose) {
//             let last = stack[stack.length - 1] // o último
//             if (last === isClose) {
//                 // corresponde ao caractere inicial
//                 stack.pop() // aparecer
//             } else {
//                 return false // Incompatibilidade
//             }
//         } else {
//             // não feche o empurrão
//             stack.push(item)
//         }
//     }
//     if (stack.length === 0) return true
//     return false
// }
