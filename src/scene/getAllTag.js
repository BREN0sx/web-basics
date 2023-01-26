// Estação B: Obtém todos os nomes de tags na página

// método embutido

function getAllTagApi() {
  const arr = document.getElementsByTagName('*') // obter todas as tags
  const resArr = []
  for (let i = 0; i < arr.length; i++) {
    const tagName = arr[i].localName // obter nome da etiqueta
    // Desduplicação
    if (!resArr.includes(tagName)) {
      resArr.push(tagName)
    }
  }
  return resArr
}

console.log('getAllTagApi', getAllTagApi())

// método de correspondência regular
function getAllTag() {
  const resArr = []
  const str = document.body.innerHTML
  const reg = /<(\w+)/g // Nome da marca de correspondência Adicionar g à correspondência global para loop
  let match = null
  // correspondência de loop
  // eslint-disable-next-line no-cond-assign
  while ((match = reg.exec(str))) {
    const tagName = match[1]
    // Desduplicação
    if (!resArr.includes(tagName)) {
      resArr.push(tagName)
    }
  }
  return resArr
}
console.log('111', getAllTag())

// Atravesse recursivamente a forma de dom
