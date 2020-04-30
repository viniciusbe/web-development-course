let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

// const concat1 = vetorInteiro.concat(vetorString)
// const concatFinal = concat1.concat(vetorDouble)

function concatenar(...vet) {
    let result = []
    for (let i in vet) {
        result = result.concat(vet[i])
    }
    return result

}
console.log(concatenar(...vetorInteiro, ...vetorDouble, ...vetorString))
//const concatFinal = vetorInteiro.concat(vetorString.concat(vetorDouble))

//console.log(concatFinal)