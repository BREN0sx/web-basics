// leetCode 72-simples

//Dadas duas strings s e t, quando elas são inseridas em um editor de texto em branco, se forem iguais, retorna true. # representa o caractere de backspace.

// NOTA: Se um caractere de backspace for inserido para texto vazio, o texto continuará vazio.

// 1. Entrada: s = "ab#c", t = "ad#c"
// saída: verdadeiro
// Explicação: Ambos s e t tornam-se "ac".

// 2. Entrada: s = "ab##", t = "c#d#"
// saída: verdadeiro
// Explicação: tanto s como t se tornarão "".

// 3. Entrada: s = "a#c", t = "b"
// saída: falso
// Explicação: s se tornará "c", mas t ainda será "b".


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = function (s, t) {

}

console.log(backspaceCompare('ab#c', 'ad#c')) // true
console.log(backspaceCompare('ab##', 'c#d#')) // true
console.log(backspaceCompare('a#c', 'b')) // false


// Olhe atentamente para a resposta

















// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var backspaceCompare = function (s, t) {
//     let help = (str) => {
//         let stack = [] // 栈
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === '#') {
//                 // 遇到#则删除一位
//                 if (stack.length) {
//                     stack.pop()
//                 }
//             } else {
//                 // 否则进栈
//                 stack.push(str[i])
//             }
//         }
//         return stack.join('') // 转为数组
//     }
//     return help(s) === help(t)
// };
