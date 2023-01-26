/*
 * Author       : BREN0sx
 * Date         : 2021-08-05
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/bind.js
 * description  : Implemente a função de vinculação
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Ideias
// copia a função fonte:
// armazena a função fonte em uma variável
// Use Object.create para copiar o protótipo da função fonte para fToBind
// retorna a função copiada
// Chame a função copiada:
// julgamento de nova chamada: use instanceof para julgar se a função é chamada por new para determinar o contexto vinculado
// Liga isso + passa parâmetros
// Retorna o resultado da execução da função fonte

Function.prototype.myBind = function (target, ...params) {
  const thisFn = this // Armazena a função de origem e os parâmetros acima (parâmetros de função)
  // Segunda passagem de parâmetros para a função retornada secondParams
  const fToBind = function (...secondParams) {
    //  Determine o contexto do contexto
    const isNew = this instanceof fToBind // Esta é uma instância de fToBind, ou seja, se o fToBind retornado é chamado pelo novo
    const context = isNew ? this : Object(target) // A nova chamada é vinculada a isso, caso contrário, é vinculada ao destino de entrada
    //  Vincule o ponto disso e passe parâmetros e retorne o resultado da execução
    return thisFn.call(context, ...params, ...secondParams)
  }
  //  Copie o protótipo da função de origem para fToBind Em alguns casos, a função não tem protótipo, como a função de seta
  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype)
  }
  return fToBind // função que retorna uma cópia
}
