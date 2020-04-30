function notas(valor, quantidade) {
    this.valor = valor
    this.quant = quantidade
}

const notaDe100 = new notas(100, 0)
const notaDe50 = new notas(50, 0)
const notaDe10 = new notas(10, 0)
const notaDe5 = new notas(5, 0)
const notaDe1 = new notas(1, 0)

function numeroDeCedulas(valorSaque) {


    notaDe100.quant = verificarValor(valorSaque, notaDe100.valor)
    valorSaque = decrementar(valorSaque, notaDe100.quant, notaDe100.valor)

    notaDe50.quant = verificarValor(valorSaque, notaDe50.valor)
    valorSaque = decrementar(valorSaque, notaDe50.quant, notaDe50.valor)

    notaDe10.quant = verificarValor(valorSaque, notaDe10.valor)
    valorSaque = decrementar(valorSaque, notaDe10.quant, notaDe10.valor)

    notaDe5.quant = verificarValor(valorSaque, notaDe5.valor)
    valorSaque = decrementar(valorSaque, notaDe5.quant, notaDe5.valor)

    notaDe1.quant = verificarValor(valorSaque, notaDe1.valor)
    valorSaque = decrementar(valorSaque, notaDe1.quant, notaDe1.valor)

}

function verificarValor(valorSaque, valorDaNota) {
    if (valorSaque / valorDaNota >= 1) {
        let quantidade = Math.floor(valorSaque / valorDaNota)
        imprimirQtdNotas(quantidade, valorDaNota)
        return quantidade
    }
}

const imprimirQtdNotas = (quantidade, nota) => console.log(`${quantidade} nota(s) de R$ ${nota}`)


function decrementar(valorSaque, quant, valorDaNota) {
    if (valorSaque / valorDaNota >= 1) {
        return valorSaque - (quant * valorDaNota)
    } else {
        return valorSaque
    }

}
numeroDeCedulas(283)