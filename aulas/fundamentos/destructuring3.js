function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return valor
}

const obj = { min : 40, max : 50 }
const teste = rand(obj) 
console.log(Math.floor(teste), teste)
console.log(rand({ min: 955 }))
console.log(rand({}))
// console.log(rand())
