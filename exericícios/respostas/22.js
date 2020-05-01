function calculoAnuidade(mes, valor) {
    return (valor * (1 + 0.05) ** (mes - 1)).toFixed(2)
}

console.log(calculoAnuidade(12, 100))

