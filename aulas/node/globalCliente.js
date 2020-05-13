require('./global') 

console.log(MinhaApp.saudacao()) // Não preciso chamar o global mais

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)