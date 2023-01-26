/*
 * Author       : BREN0sx
 * Date         : 2021-09-10 13:43:57
 * LastEditors  : BREN0sx
 * LastEditTime : 2022-12-14 21:27:48
 * FilePath     : /web-basics/src/scene/task-concurrent.js
 * description  : Tarefas assíncronas, controle o número de simultaneidade
 * https://juejin.cn/post/6912220538286899207

 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// idéia:
// O número de tarefas é controlado pelo tamanho
// Adicionar tarefas assíncronas de promessa, se o número de tarefas não atingir o número máximo de concorrentes, execute diretamente de forma assíncrona
// Importante: Depois que a tarefa assíncrona Promise terminar, reduza o tamanho e pegue uma nova tarefa diretamente do pool de tarefas para executar

// Kuaishou se encontrou em ambos os lados.
// Diz-se na Internet que deve haver muitas dessas perguntas em bytes

class TaskConcurrent {
  constructor(size) {
    this.max = size
    this.size = 0 // Controle de Quantidade Simultâneo
    this.taskQueue = [] // fila de tarefas
  }

  // Gerar um objeto de tarefa assíncrona
  taskFactory(fn, params, resolve, reject) {
    return {
      fn, // tarefa assíncrona
      params, // parâmetros de função
      resolve, // completo de forma assíncrona
      reject, // erro assíncrono
    }
  }

  // adicionar tarefa
  addTask(fn, ...params) {
    return new Promise((resolve, reject) => {
      const taskObj = this.taskFactory(fn, params, resolve)
      // adicionado ao final da pilha
      this.taskQueue.push(taskObj)
      if (this.size !== this.max) {
        this.queueOutTask()
      }
    })
  }

  // remover tarefa da pilha
  queueOutTask() {
    // O pool de tarefas não tem tarefas
    if (this.taskQueue.length === 0) {
      return
    }
    // Iniciar uma tarefa assíncrona e aumentar o número de tarefas simultâneas
    this.size++
    const {
      resolve, fn, params, reject,
    } = this.taskQueue.shift() // primeiro a entrar, primeiro a sair
    const taskPromise = this.runTask(fn, params, reject)
    // Retorne uma promessa, resolva a promessa e uma promessa será encadeada automaticamente
    resolve(taskPromise)
  }

  // realizar tarefas
  runTask(fn, params, reject) {
    // Execute a tarefa Se o valor de retorno não for assíncrono, envolva o valor de retorno em assíncrono
    const taskPromise = Promise.resolve(fn(...params))
    taskPromise
      .then((res) => {
        console.log('fim assíncrono', res)
        this.pullTask() // buscar novo retorno de chamada
      })
      .catch((err) => {
        this.pullTask() // buscar novo retorno de chamada
        reject(err) // Falha assíncrona
      })
    return taskPromise
  }

  //Fim assíncrono Adicionar nova tarefa assíncrona
  pullTask() {
    // A última tarefa tem um resultado, abra uma cota simultânea
    this.size--
    // Pegue tarefas do pool de tarefas e execute tarefas assíncronas automaticamente
    this.queueOutTask()
  }
}



// Chame addTask para adicionar tarefas assíncronas uma a uma
const task = (timeout) => new Promise((resolve) => setTimeout(() => {
  resolve(timeout) // valor de retorno
}, timeout))

// Simular tarefa assíncrona 1
// const taskList = [5000, 3000, 1000, 10300, 8000, 2000, 4000, 5000]
// async function startNoConcurrentControl() {
//   // Inicializar o pool simultâneo
//   const cc = new TaskConcurrent(2)
//   console.time('tempo de execução assíncrono')
//   // Adicionar todas as tarefas assíncronas
//   const resArr = await Promise.all(taskList.map((item) => cc.addTask(task, item)))
//   console.log('Valor de retorno da tarefa assíncrona', resArr)
//   console.timeEnd('tempo de execução assíncrono')
// }
// startNoConcurrentControl()

// Simula 2 ciclos assíncronos para adicionar tarefas assíncronas
function start() {
  const taskConcurrent2Instance = new TaskConcurrent(2)
  let count = 10
  // parâmetros organizacionais
  while (count--) {
    const p = taskConcurrent2Instance.addTask(task, count * 1000)
    p.then((res) => {
      console.log('p', res)
    })
  }
}
start()
