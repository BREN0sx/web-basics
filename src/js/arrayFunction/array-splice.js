/*
 * Author       : BREN0sx
 * Date         : 2021-09-22
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-01-12
 * FilePath     : /js-base/src/js/array-splice.js
 * description  :Implementar emenda de matriz
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

Array.prototype._splice = function (start, deleteCount, ...addList) {
  if (start < 0) {
    if (Math.abs(start) > this.length) {
      start = 0
    } else {
      start += this.length
    }
  }

  if (typeof deleteCount === 'undefined') {
    deleteCount = this.length - start
  }
  // Excluir
  const removeList = this.slice(start, start + deleteCount)
  const right = this.slice(start + deleteCount)
  // Adicionar
  let addIndex = start
  addList.concat(right).forEach((item) => {
    this[addIndex] = item
    addIndex++
  })
  this.length = addIndex

  return removeList
}
