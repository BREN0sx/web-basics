// Um ​​lado do livrinho vermelho
// codificação:
// analisa a url como:
// {
//     "protocol": "http",
//         "hoshostname": "www.domain.com",
//             "path": "order",
//                 "query": {
//         "user": "anonymous",
//             "id": "456",
//                 "city": "Pequim",
//                     "enabled": true
//     }
// }

// Links para resolver:
const url = 'http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
parse(url)

function parse(url) {
}

// dois lados
// Implemente a polify de promise.allsettled
// Explicação: A matriz está cheia de tarefas assíncronas e os resultados de todas as tarefas assíncronas são retornados independentemente do sucesso

Promise.allSettled = function (promises) {
}

// leia com atenção a resposta

// function parse(url) {
//     let protocolArr = url.split('://')
//     let protocol = protocolArr[0]
//     let hostnameArr = protocolArr[1].split('/')
//     let hoshostname = hostnameArr[0]
//     let pathArr = hostnameArr[1].split('?')
//     let path = pathArr[0]
//     let queryArr = pathArr[1].split('&')
//     let query = {}
//     queryArr.forEach(item => {
//         // a convenção de chave de valor não especificada é verdadeira
//         if (item.indexOf('=') === -1) {
//             query[item] = true
//             return
//         }
//         let itemArr = item.split('=')
//         let key = itemArr[0]
//         // Analisando parâmetros chineses
//         let value = decodeURI(itemArr[1])
//         // Chaves repetidas devem ser montadas em uma matriz
//         if (query[key] !== undefined) {
//             if (!Array.isArray(query[key])) {

//                 query[key] = [query[key]]
//             }
//             query[key].push(value)
//         } else {
//             query[key] = value
//         }

//     })
//     return {
//         protocol,
//         hoshostname,
//         path,
//         query,
//     }
// }

// Pequeno Livro Vermelho Dois Lados

// A maneira de compilar a saída e executar o resultado

// Promise.allSettled = function(promises) {
//     return new Promise((resolve, reject) => {
//         let total = 0
//         let resArr = []
//         // Promessas em loop
//         promises.forEach((item, index) => {
//             // Cumprir a promessa
//             Promise.resolve(item).then(res => {
//                 resArr[index] = {
//                     status: 'fulfilled',
//                     value: res
//                 }
//                 // Registre a quantidade concluída e retorne o resultado quando a quantidade for atingida
//                 total++
//                 if (total === promises.length) {
//                     resolve(resArr)
//                 }
//             }).catch(err => {
//                 resArr[index] = {
//                     status: 'rejected',
//                     value: err
//                 }
//                 total++
//                 if (total === promises.length) {
//                     resolve(resArr)
//                 }
//             })
//         });
//     })
// }

// // matriz de reescrita
// Promise.allSettled = function(promises) {
//     // Reescreva cada promessa para retornar o resultado ao elemento da matriz para que tudo seja bem-sucedido
//     let mappedPromises = promises.map((p) => {
//         return p
//             .then((value) => {
//                 // Retornar o resultado diretamente
//                 return {
//                     status: 'fulfilled',
//                     value,
//                 }
//             })
//             .catch((reason) => {
//                 // Retornar o resultado diretamente
//                 return {
//                     status: 'rejected',
//                     value: reason,
//                 }
//             })
//     });
//     return Promise.all(mappedPromises)
// };
