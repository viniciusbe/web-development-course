
function bhaskara(ax2, bx, c) {
    let raizes = []
    delta = bx * bx - 4 * ax2 * c
    if (delta < 0) {
        return 'Delta é negativo'
    } else {
        let raizPositiva = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let raizNegativa = (-bx - Math.sqrt(delta)) / (2 * ax2)
        raizes.push(raizPositiva, raizNegativa)
        return raizes
    }
}


console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 2, 1)) 