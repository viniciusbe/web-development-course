function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
        console.log(partes[indice], valor)
    })
    return resultado.join('')
}

const produto = 'Xiaomi note 8'
const preco = 1500
const precoParcela = 600
console.log(real`${produto} está por 1x de ${preco} ou 3x de ${precoParcela}`)
