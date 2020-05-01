function parEImpar(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let aux = fim
        fim = inicio
        inicio = aux
    }
    for (let i = inicio + 1; i < fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

parEImpar(-3, -35)