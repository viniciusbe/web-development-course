// setTimeout(function () {
//     console.log('2 segundos se passaram...')

//     setTimeout(function () {
//         console.log('4 segundos se passaram...')
//     }, 2000)
// }, 2000) 

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Execuntando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)