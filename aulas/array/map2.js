const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis","preco": 41.22}',
    '{"nome":"Caneta","preco":7.50}'
]

// Retornar um array apenas com os precos

const jsonToObj = e => JSON.parse(e)

const apenasPreco = e => Object.values(e)

const segundoIndice = e => e[1]

const arrayPreco = carrinho.map(jsonToObj).map(apenasPreco).map(segundoIndice)

console.log(arrayPreco)

