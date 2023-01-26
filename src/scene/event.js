/*
 * Author       : BREN0sx
 * Date         : 2021-09-11 16:50:09
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04 16:07:22
 * FilePath     : /js-base/src/scene/event.js
 * description  : Implemente uma classe de evento (inscreva-se para publicar) com o método on off once emit
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Assine para publicar
class Event {
  constructor() {
    this.events = {}
  }

  // inscrição
  on(type, fn) {
    // Detecção de parâmetro
    if (!(fn instanceof Function)) {
      throw 'retorno de chamada deve ser uma função'
    }
    // Inicializar o contêiner
    if (!this.events[type]) {
      this.events[type] = []
    }
    // adicionar ouvinte
    if (!this.events[type].includes(fn)) {
      this.events[type].push(fn)
    }
  }

  /**
     * description: O evento é acionado para notificar todos os assinantes
     * param type [type] tipo de evento
     * param eventData [type] Informações do evento Dados do assinante
     * param _this [type] Assinante é esta montaria
     * return [type]
     */
  emit(type, eventData, _this) {
    if (!this.events[type]) {
      throw 'O evento não está ouvindo'
    }
    this.events[type].forEach((item) => {
      item.call(_this, eventData)
    })
  }

  // Cancelar subscrição
  off(type, fn) {
    // vazio sem função
    if (!fn) {
      this.events[type] = []
      return
    }
    // Use filtro em vez de emenda porque excluir o elemento atual por emenda afetará a travessia de emissão atual, resultando em acionamento de evento incompleto
    this.events[type] = this.events[type].filter((item) => item !== fn)
  }

  // assine uma vez
  once(type, fn) {
    const self = this
    // função de substituição
    const reWriteFn = function (eventData) {
      fn.call(this, eventData)
      self.off(type, reWriteFn) // Desinstalar após a execução
    }
    // entrada
    this.on(type, reWriteFn)
  }
}

// código de teste
const e = new Event()
// inscrição
e.on('click', (msg) => {
  console.log(1, msg, this)
})
function testOff(msg) {
  console.log(2, msg, this)
}
e.on('click', testOff)
function fn3(msg) {
  console.log(3, msg, this)
}
// assine uma vez
e.once('click', fn3)
function fn4(msg) {
  console.log(4, msg, this)
}
e.once('click', fn4)
console.log(e)
// Notificar atualizações de eventos
const obj = {
  a: 'A entrada deste objeto',
}
e.emit('click', 'dados do evento', obj)
console.log(e)
e.off('click', testOff)
console.log('fora cancelar inscrição', e)
