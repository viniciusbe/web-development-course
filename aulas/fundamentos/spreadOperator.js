var arr = ['a', 'b', 'c', 'd']
var arr2 = ['1']

var func = function (...arr) {
    let arg = arr

    console.log(arg.length);
    //
    for (let i in arg)
        console.log(arg[i]);
}

func(arr, arr2) // Desse modo, todo o array/string é tratado como apenas um elemento 
console.log(' ')
func(...arr, ...arr2) // Usando o spread, o array/string é tratado como varias variaveis

// o spread(...) tem a função de expandir um array ou string
// onde são esperados zero ou mais argumentos ou elementos
