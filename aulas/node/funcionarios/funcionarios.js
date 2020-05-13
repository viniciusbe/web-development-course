const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const chines = pessoa => pessoa.pais == 'China'
    
    const mulher = pessoa => pessoa.genero == 'F'
    
    const menorSalario = function(pessoaAnterior,pessoa) {
        let resultado = pessoaAnterior
        if(pessoa.salario < pessoaAnterior.salario) {
            resultado = pessoa
        }
        return resultado
    }
    
    const chinesaMenorSalario = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)
    console.log(chinesaMenorSalario)
    console.log(chinesaMenorSalario.id)
//    console.log(funcionarios)
})

