function imprimirInteiroAleatorio(min = 0, max = 10) {
    const valor = Math.random() * (max - min) + min
    return Math.trunc(valor)
}
let numero
do {
    numero = imprimirInteiroAleatorio()
    console.log(numero)
} while (numero != 0);


