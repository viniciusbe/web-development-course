function paresEImpares(inteiros) {
    let pares = 0
    let impares = 0

    for (let i in inteiros) {
        if (inteiros[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`Pares: ${pares}\nÍmpares: ${impares}`)
}

vetorInteiros = [1, 2, 5, 6, 7, 8, 9]

paresEImpares(vetorInteiros)