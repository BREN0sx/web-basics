/* eslint-disable no-proto */
/*
 * Author       : BREN0sx
 * Date         : 2021-07-29
 * LastEditors  : BREN0sx
 * LastEditTime : 2021-11-04
 * FilePath     : /js-base/src/js/es5-es6extend.js
 * description  : herdar
 * Copyright (c) 2023 by BREN0sx, All Rights Reserved.
 */

// Implementação de herança de composição parasita ES5:
// objeto herdado da classe pai
function supFather(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green'] // 复杂类型
}
supFather.prototype.sayName = function (age) {
  console.log(this.name, 'age')
}

// Subclasse
function Sub(name, age) {
  //  Empreste o método da classe pai: modifique este ponto e atribua os métodos e propriedades no construtor da classe pai à subclasse
  supFather.call(this, name)
  this.age = age
}
// Reescreva o protótipo da subclasse e corrija o construtor para apontar para
function inheritPrototype(sonFn, fatherFn) {
  sonFn.prototype = Object.create(fatherFn.prototype) // Propriedades e métodos de cópia rasa no protótipo da classe pai
  sonFn.prototype.constructor = sonFn // Corrija o construtor para apontar para a função herdada
}
//
inheritPrototype(Sub, supFather)
// O atributo protótipo da subclasse deve ser escrito posteriormente, caso contrário, será substituído
Sub.prototype.sayAge = function () {
  console.log(this.age, 'foo')
}

// Instancie uma subclasse e você poderá encontrar propriedades e métodos na instância
const instance1 = new Sub('BREN0sx', 24)
const instance2 = new Sub('BREN0sx2', 18)
instance1.colors.push('black')
console.log(instance1) // {"name":"BREN0sx","colors":["red","blue","green","black"],"age":24}
console.log(instance2) // {"name":"BREN0sx2","colors":["red","blue","green"],"age":18}

// Exemplo de uso do ES5 para implementar extensões do ES6
//  Na verdade, é o exemplo da herança combinada parasitária do ES5 acima.
function Parent(name) {
  this.name = name
}
Parent.sayHello = function () {
  console.log('hello')
}
Parent.prototype.sayName = function () {
  console.log(`my name is ${this.name}`)
  return this.name
}

function Child(name, age) {
  Parent.call(this, name) //  Equivalente a chamar super
  this.age = age
}
//  protótipo de herança
function _inherits(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
  Child.__proto__ = Parent
}
_inherits(Child, Parent)

Child.prototype.sayAge = function () {
  console.log(`my age is ${this.age}`)
  return this.age
}
// teste
const parent = new Parent('Parent')
const child = new Child('Child', 18)
console.log('parent: ', parent) // parent:  Parent {name: "Parent"}
Parent.sayHello() // hello
parent.sayName() // my name is Parent
console.log('child: ', child) // child:  Child {name: "Child", age: 18}
Child.sayHello() // hello
child.sayName() // my name is Child
child.sayAge() // my age is 18
