function conceito(vetorNotas) {
    for (let i in vetorNotas) {
        switch (Math.floor(vetorNotas[i])) {
            case 0: case 1: case 2: case 3: case 4:
                console.log('Conceito D')
                break
            case 5: case 6:
                console.log('Conceito C')
                break
            case 7: case 8:
                console.log('Conceito B')
                break
            case 9: case 10:
                console.log('Conceito A')
                break
            default:
                console.log("Nota inválida")
        }
    }
}

conceito([10, 13, 9, 8.2, 2.5, 7.7, 6.8])