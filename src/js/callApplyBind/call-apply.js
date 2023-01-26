/* eslint-disable no-undef */
/*
 * Author       : BREN0sx
 * Date         : 2021-07-29
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/call-apply.js
 * description  : Implementar métodos de chamada e aplicação
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

Function.prototype.myCall = function (context, ...paramsArr) {
  //  Certifique-se de que isso seja executado
  if (context === null || context === undefined) {
    // O valor this especificado como nulo e indefinido apontará automaticamente para o objeto global (janela no navegador)
    context = window
  } else {
    context = Object(context) // Um valor deste para um valor primitivo (número, string, booleano) apontará para o objeto de instância desse valor primitivo
  }
  //  função de armazenamento temporário
  const specialPrototype = Symbol('Símbolo de atributo especial')
  context[specialPrototype] = this
  const result = context[specialPrototype](...paramsArr) //  Execute a função e passe o parâmetro por ligação implícita vincular isso
  delete context[specialPrototype] // Excluir propriedades do objeto de contexto
  return result // retorna o resultado da execução da função
}

//  altere apenas o parâmetro
Function.prototype.myApply = function (context, paramsArr) {
  //  Certifique-se de que isso seja executado
  if (context === null || context === undefined) {
    // O valor this especificado como nulo e indefinido apontará automaticamente para o objeto global (janela no navegador)
    context = window
  } else {
    context = Object(context) // Um valor deste para um valor primitivo (número, string, booleano) apontará para o objeto de instância desse valor primitivo
  }
  //  função de armazenamento temporário
  const specialPrototype = Symbol('Símbolo de atributo especial')
  context[specialPrototype] = this
  const result = context[specialPrototype](...paramsArr) //  Execute a função e passe o parâmetro por ligação implícita vincular isso
  delete context[specialPrototype] // Excluir propriedades do objeto de contexto
  return result // retorna o resultado da execução da função
}
