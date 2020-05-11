Array.prototype.reduce2 = function (callback, acumulador) {

    if (acumulador === undefined) {
        acumulador = this.shift()

    }
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, atual) => acumulador && atual

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => acumulador || atual

const todos = alunos.map(e => e.bolsista).reduce2(todosBolsistas)
const algum = alunos.map(e => e.bolsista).reduce2(algumBolsista)

console.log(`Todos alunos são bolsistas? ${todos}\nAlgum aluno é bolsista? ${algum}`)

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))