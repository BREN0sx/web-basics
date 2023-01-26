/*
 * Author       : BREN0sx
 * Date         : 2021-09-17 12:24:17
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 16:07:51
 * FilePath     : /js-base/src/scene/dom.js
 * description  : Como atravessar uma tree dom
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// escrita recursiva
function traversal(node) {
  // Manipulação de nós
  if (node && node.nodeType === 1) {
    console.log(node.tagName)
  }
  // Passagem recursiva de pré-ordem de nós filhos
  let { childNodes } = node
  let item
  for (let i = 0; i < childNodes.length; i++) {
    item = childNodes[i]
    if (item.nodeType === 1) {
      traversal(item)
    }
  }
}


// Método de escrita da pilha transversal de largura
function traversal2(node) {
  const stack = []
  stack.push(node)
  while (stack.length > 0) {
    const elem = stack.pop()
    if (elem && elem.nodeType === 1) {
      console.log(elem.tagName)
      const { children } = elem
      const len = children.length
      // Os nós filhos são colocados na pilha e adicionados à cabeça primeiro a entrar primeiro a sair
      for (let i = 0; i < len; i++) {
        stack.unshift(children[i])
      }
    }
  }
}
