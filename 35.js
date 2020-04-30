const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

Array.prototype.push.apply(vetorPilha, vetorAdiciona)

function adicionarVet(vet1, vet2) {

    for (let i in vet1) {
        console.log(vet1[i])
    }
}

adicionarVet(vetorAdiciona, vetorPilha)

console.log(vetorPilha, vetorAdiciona)