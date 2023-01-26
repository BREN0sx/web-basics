// 72. Editar distância - difícil

const minDistance = (word1, word2) => {

}

console.log(minDistance('horse', 'ros')) // 3

// word1 = "horse", word2 = "ros"
// 3




// Olhe atentamente para a resposta
















// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {number}
//  */
// const minDistance = (word1, word2) => {
//   const dp = new Array(word1.length + 1) // Total de word1.length + 1 linha
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(word2.length + 1).fill(0) // Existem colunas word2.length + 1
//   }

//   // Inicialize a matriz, os primeiros i caracteres da word1 requerem pelo menos i operações, por exemplo, a exclusão de i torna-se a word2
//   for (let i = 1; i <= word1.length; i++) {
//     dp[i][0] = i
//   }

//   //Inicialize a matriz, os primeiros j caracteres da word2 requerem pelo menos j operações, por exemplo, j inserções tornam-se word1
//   for (let j = 1; j <= word2.length; j++) {
//     dp[0][j] = j
//   }

//   // loop word1 e word2
//   for (let i = 1; i <= word1.length; i++) {
//     for (let j = 1; j <= word2.length; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         // se word1[i-1] === word2[j-1], Indica que os caracteres que precisam ser adicionados são iguais, e que o último caractere não precisa ser manipulado, e o resultado do caractere anterior é reutilizado diretamente
//         dp[i][j] = dp[i - 1][j - 1]
//       } else {
//         // dp[i-1][j] + 1：exclusão correspondente
//         // dp[i][j-1] + 1：novo correspondente
//         // dp[i-1][j-1] + 1：Operação de substituição correspondente
//         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
//       }
//     }
//   }

//   return dp[word1.length][word2.length]
// }
