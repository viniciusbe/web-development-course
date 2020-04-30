function resultado(nota) {

    if (nota <= 37) {
        return `Nota:${nota}...Reprovado`
    } else {
        if (nota % 5 > 2) {
            nota += 5 - (nota % 5)
            return `Nota:${nota}...Aprovado`
        } else {
            return `Nota:${nota}...Aprovado`

        }
    }

}

console.log(resultado(100))
console.log(resultado(30))
console.log(resultado(38))
console.log(resultado(88))
console.log(resultado(61))
