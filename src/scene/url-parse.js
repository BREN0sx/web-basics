// lado do pequeno livro vermelho
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
  const protocolArr = url.split('://')
  const protocol = protocolArr[0]
  const hostnameArr = protocolArr[1].split('/')
  const hoshostname = hostnameArr[0]
  const pathArr = hostnameArr[1].split('?')
  const path = pathArr[0]
  const queryArr = pathArr[1].split('&')
  const query = {}
  queryArr.forEach((item) => {
    // a convenção de chave de valor não especificada é verdadeira
    if (item.indexOf('=') === -1) {
      query[item] = true
      return
    }
    const itemArr = item.split('=')
    const key = itemArr[0]
    // Analisando parâmetros chineses
    const value = decodeURI(itemArr[1])
    // Chaves repetidas devem ser montadas em uma matriz
    if (query[key] !== undefined) {
      if (!Array.isArray(query[key])) {
        query[key] = [query[key]]
      }
      query[key].push(value)
    } else {
      query[key] = value
    }
  })
  return {
    protocol,
    hoshostname,
    path,
    query,
  }
}
