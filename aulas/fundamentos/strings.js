const escola = "Cod3r"

console.log(escola.charAt(0))
console.log(escola.charAt(5)) //Não retorna nada
console.log(escola.charCodeAt(3)) 
console.log(escola.indexOf('3')) //Em que posição esta o '3'

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log('3' + 2)
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))