/* eslint-disable no-underscore-dangle */
/*
 * Author       : BREN0sx
 * Date         : 2021-07-30
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/new.js
 * description  : novo princípio de implementação
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// Ideia: Executar a função, montar o protótipo e avaliar o valor de retorno
function myNew(...arr) {
  const [fn, ...params] = arr // O primeiro parâmetro é o construtor a ser novo, e os demais são os parâmetros do construtor
  //  Montar protótipo Resultado da execução
  const target = {} // objeto para montar o protótipo
  target._proto_ = fn.prototype // Conexão de protótipo, o destino é uma instância de fn
  const res = fn.apply(target, params) // Execute a função e aponte para a instância do construtor
  //  Valor de retorno do julgamento
  const type = typeof res // tipo de resultado
  if (res && (type === 'object' || type === 'function')) {
    return res // O construtor retorna outros objetos ou a função retorna res
  }
  return target // Caso contrário, retorne uma instância da função
}
