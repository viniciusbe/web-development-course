let stringPontuacoes = "41, 40, 20, 4, 51, 25, 80, 38, 56, 7"
 
 
function avaliaPontuacoes (stringPontuacoes) {

    let pontuacoes = stringPontuacoes.split(", ")

    for(let i in pontuacoes) {
        pontuacoes[i] = parseInt(pontuacoes[i])
    }
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))