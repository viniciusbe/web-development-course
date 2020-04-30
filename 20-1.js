function numeroDeCedulas(valorSaque) {
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0
    if (valorSaque / 100 >= 1) {
        notas100 = Math.floor(valorSaque / 100)
        valorSaque = decrementar(valorSaque, notas100, 100)
        imprimirQtdNotas(notas100, 100)
    }
    if (valorSaque / 50 >= 1) {
        notas50 = Math.floor(valorSaque / 50)
        valorSaque = decrementar(valorSaque, notas50, 50)
        imprimirQtdNotas(notas50, 50)
    }
    if (valorSaque / 10 >= 1) {
        notas10 = Math.floor(valorSaque / 10)
        valorSaque = decrementar(valorSaque, notas10, 10)
        imprimirQtdNotas(notas10, 10)
    }
    if (valorSaque / 5 >= 1) {
        notas5 = Math.floor(valorSaque / 5)
        valorSaque = decrementar(valorSaque, notas5, 5)
        imprimirQtdNotas(notas5, 5)
    }
    if (valorSaque / 1 >= 1) {
        notas1 = Math.floor(valorSaque)
        valorSaque = decrementar(valorSaque, notas1, 1)
        imprimirQtdNotas(notas1, 1)
    }
}

function imprimirQtdNotas(quantidade, nota) {
    console.log(`${quantidade} nota(s) de R$ ${nota}`)
}

let decrementar = (valorSaque, quantidade, nota) => valorSaque - (quantidade * nota)

numeroDeCedulas(253)