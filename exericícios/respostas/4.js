function divisaoEResto(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor)
    const resto = dividendo % divisor

    return console.log(resultado, resto)


}

divisaoEResto(11, 4)