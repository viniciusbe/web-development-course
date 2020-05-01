function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.3
    }
}

const prod1 = criarProduto('Xiaomi', 800)
const prod2 = criarProduto('Iphone', 3000)
console.log(prod1)
console.log(prod2)