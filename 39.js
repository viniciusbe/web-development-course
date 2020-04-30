const vetorA = [1]
const vetorB = [4]

function trocarVetores(vet1, vet2) {

    Array.prototype.push.apply(vet1, vet2)

    for (let i in vet2) {
        vet2[i] = vet1[i]
    }

    vet1.splice(0, vet1.length / 2)

    console.log(vet1)
    console.log(vet2)
}

trocarVetores(vetorA, vetorB)