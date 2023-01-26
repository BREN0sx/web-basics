/*
 * Author       : BREN0sx
 * Date         : 2021-09-17 21:06:19
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-09-17 21:06:21
 * FilePath     : /js-base/src/scene/numAdd.js
 * description  :Como resolver o problema de cálculos de ponto flutuante imprecisos e os motivos para números de ponto flutuante imprecisos por meio do código.
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// Ideia: converter decimal para inteiro para operar
function add(...args) {
  // Quantos dígitos tem o menor decimal
  const maxLen = Math.max.apply(
    null,
    args.map((item) => {
      const str = String(item).split('.')[1]
      return str ? str.length : 0
    }),
  )
  // O mínimo decimal necessário para converter em um número inteiro
  const baseMultiple = 10 ** maxLen
  return (
  // Multiplique o decimal pelo múltiplo e divida pelo múltiplo Restaurar o ponto decimal
    args.reduce((sum, cur) => sum + cur * baseMultiple, 0) / baseMultiple
  )
}
console.log(add(0.1, 0.2)) // => 0.3
console.log(add(10, 11)) // => 21
console.log(add(0.001, 0.003)) // => 0.004
console.log(add(0.001, 0.003, 0.005)) // => 0.009
console.log(add(0.001)) // => 0.001

// razão
// Não apenas JavaScript, mas todas as linguagens que seguem a especificação IEEE 754;
// Em JavaScript, todos os números são armazenados como números de ponto flutuante de precisão dupla de 64 bits;
// O número de ponto flutuante de precisão dupla é dividido em 3 segmentos nos 64 bits, e esses 3 segmentos também determinam o valor de um número de ponto flutuante. A divisão de 64 bits é o modo "1-11-52" , especificamente:
// 1. O bit mais alto de 1 bit (o bit mais à esquerda) representa o bit de sinal, 0 significa positivo, 1 significa negativo;
// 2,11 dígitos representam a parte do expoente;
// 3,52 bits representam a parte da mantissa, que é a parte efetiva do campo