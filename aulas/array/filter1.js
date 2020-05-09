const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },

]
const caroEFragil = function(e)  {
    return e.preco >= 500 && e.fragil
}

const resultado = produtos.filter(caroEFragil)


console.log(resultado)