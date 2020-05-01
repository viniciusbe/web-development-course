function teste1(num) {
    if(num > 7)
        console.log(num)     //como nao foi usado chaves para definir o bloco do if, apenas a primeira sentença faz parte dele
        console.log('Final')
}


teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // cuidado com o ';' , nao usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)


// Sempre criar blocos para as estruturas de controle