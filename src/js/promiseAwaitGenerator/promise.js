/* eslint-disable no-unused-expressions */
/*
 * Author       : BREN0sx
 * Date         : 2021-07-30
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/es6/promise.js
 * description  : Implemente totalmente as promessas
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */
// https://cloud.tencent.com/developer/article/1604360

// Três estados da especificação Promise/A+
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // O construtor aceita um retorno de chamada
  constructor(promiseCallBack) {
    this._resolveQueue = [] // A fila de retorno de chamada de execução bem-sucedida coletada até então pode ser chamada várias vezes
    this._rejectQueue = [] // A fila de callback de falhas de execução coletadas até então
    this._status = PENDING // estado de promessa
    this._value = undefined // Armazene o valor do retorno de retorno de chamada
    // Como resolver/rejeitar é chamado dentro de promiseCallBack
    // Então você precisa usar a função de seta para corrigir este ponto, caso contrário, você não pode encontrar this._resolveQueue
    const _resolve = (val) => {
      const run = () => {
        // O status só pode mudar de pendente para cumprido ou rejeitado
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val
        // "então o método pode ser chamado várias vezes pela mesma promessa"
        while (this._resolveQueue.length) {
          // .then、.reject Callbacks registrados só podem ser executados uma vez
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run) // Código síncrono também deve adicionar assíncrono
    }
    // Alcançar a mesma resolução
    const _reject = (val) => {
      const run = () => {
        // O status só pode mudar de pendente para cumprido ou rejeitado
        if (this._status !== PENDING) return
        this._status = REJECTED
        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // new Promise() Execute a promessaCallBack imediatamente e passe na resolução e rejeite
    promiseCallBack(_resolve, _reject)
  }

  // Este é o princípio da chamada em cadeia
  // 1. então retorna uma nova promessa
  // 2. Execute o retorno de chamada para obter o valor de retorno Este valor de retorno é usado para a nova promessa
  // 3. Se for uma Promise, espere que o estado da Promise mude e passe para resolver, caso contrário retorne para resolver
  then(resolveFn, rejectFn) {
    return new MyPromise((resolve, reject) => {
      // Envolver callbacks em funções
      if (typeof resolveFn !== 'function') resolveFn = (value) => value
      if (typeof rejectFn !== 'function') rejectFn = (error) => error

      // Obtém o valor de retorno do retorno de chamada assíncrono Se for uma Promise, aguarde a alteração do estado da Promise, caso contrário resolva diretamente
      const fulfilledFn = (value) => {
        // Capturar erros de execução
        try {
          // Execute de forma assíncrona e obtenha o valor de retorno
          const x = resolveFn(value)
          // Se for uma Promise, aguarde a alteração do estado da Promise, caso contrário, retorne para resolver
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      const rejectedFn = (error) => {
        try {
          const x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      // Execute ações com base no estado
      if (this._status === PENDING) {
        // Execute ações com base no estado
        this._resolveQueue.push(fulfilledFn)
        this._rejectQueue.push(rejectedFn)
      } else if (this._status === FULFILLED) {
        // Execute o retorno de chamada diretamente
        fulfilledFn(this._value) // this._value é o valor executado durante o construtor
      } else if (this._status === REJECTED) {
        // Execute o callback catch diretamente
        rejectedFn(this._value)
      }
    })
  }

  // O método static resolve é usado para declarar rapidamente uma promessa
  static resolve(value) {
    if (value instanceof MyPromise) return value // De acordo com a especificação, se o parâmetro for uma instância de Promise, retorne esta instância diretamente
    return new MyPromise((resolve) => resolve(value)) // Implemente imediatamente a promessa
  }

  // método de rejeição estático
  static reject(reason) {
    // Alterar promessa para rejeitar
    return new MyPromise((resolve, reject) => reject(reason))
  }

  // Retorno de chamada de falha assíncrona Vincule um retorno de chamada de erro atrás do assíncrono, se falhar, execute o retorno de chamada de erro
  catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }

  // Passe o retorno de chamada para o resolveFn de .then e capture e execute o retorno de chamada depois que o estado mudar
  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) => MyPromise.resolve(callback()).then(() => {
        throw reason
      }), // rejeitar o mesmo motivo
    )
  }

  // Toda conclusão está completa, uma falha é falha
  // Geralmente, as promessas serão escritas à mão para implementar a promesse.all
  all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      const resArr = []
      let count = 0
      for (const [index, element] of promiseArr.entries()) {
        // Promise.resolve(element) Usado para lidar com o caso em que o valor de entrada não é uma promessa
        MyPromise.resolve(element)
          .then((res) => {
            count++
            resArr[index] = res
            if (count === promiseArr.length) {
              resolve(resArr)
            }
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }

  // promessa de corrida, um estado que aparece é o estado final
  // Isso também pode
  race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      for (const element of promiseArr.values()) {
        MyPromise.resolve(element)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }

  // Explicação: A matriz está cheia de tarefas assíncronas e os resultados de todas as tarefas assíncronas são retornados independentemente do sucesso
  allSettled(promisesArr) {
    // Reescreva cada promessa para retornar o resultado ao elemento da matriz para que tudo seja bem-sucedido
    const mapPromisesArr = promisesArr.map((p) => p
      .then((value) => ({
        // Retornar o resultado diretamente

        status: 'fulfilled',
        value,
      }))
      .catch((reason) => ({
        // Retornar o resultado diretamente
        status: 'rejected',
        value: reason,
      })))
    return this.all(mapPromisesArr)
  }
}

// Instruções

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})

p1.then((res) => {
  console.log('p1', res)
  return 2
})
  .then((res) => {
    console.log('3', res)
    return 3
  })
  .then((res) => {
    console.log('4', res)
  })
