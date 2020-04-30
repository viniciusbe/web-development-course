const formatarNumero = function (numero) {
    const inteiro = Math.trunc(numero)
    const decimal = 100 * (numero - Math.trunc(numero))
    console.log(`R$ ${inteiro},${decimal.toFixed(0)}`)
}

formatarNumero(0.1 + 0.2)