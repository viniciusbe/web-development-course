// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'node') {
    console.log(texto)
}

log()
log("Sou mais forte")

// operador rest
function total(a, ...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
const array = [2, 3, 4, 5]
console.log(total(...array))