/*
 * Author       : BREN0sx
 * Date         : 2021-09-10 17:04:06
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 16:00:04
 * FilePath     : /js-base/src/scene/toThousands.js
 * description  : Processamento de milésimos de número

 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

const oldNum = 13333111122.22

// Regular
function toThousands1(num) {
  // pelo menos três dígitos
  num = parseFloat(num.toFixed(3))
  // processamento de ponto decimal
  let [integer, decimal] = String.prototype.split.call(num, '.')
// corresponde apenas se houver um número ou dois números seguidos por três números + significa corresponder a 3 números várias vezes
  // $& representa a string usada para correspondência
  integer = integer.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
  return `${integer}${decimal ? `.${decimal}` : ''}`
}

// Processamento de milésimos de número
function toThousands2(num) {
  // ponto decimal
  let [integer, decimal] = String.prototype.split.call(num, '.')
  const s = String(integer) // Números são geralmente convertidos em caracteres
  const arr = []
  let j = 0 // Se o número correspondente ao ciclo atual é um múltiplo de 3
  // juntando na ordem inversa
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i])
    j++
    // Se for múltiplo de 3 e houver um número na frente, adicione um,
    if (j % 3 === 0 && i !== 0) {
      arr.push(',')
    }
  }
  // array reverso para string
  integer = arr.reverse().join('')
  // ponto decimal
  if (decimal) {
    integer = `${integer}.${decimal}`
  }

  return integer
}

console.log(toThousands1(oldNum))
console.log(toThousands2(oldNum))
