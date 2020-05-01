const stringMa = ' CBda'
const stringMi = 'bca d'

function contemStrings(string1, string2) {

    const string1Up = string1.toUpperCase()
    const string2Up = string2.toUpperCase()

    for (let i in string2Up) {
        if (string1Up.indexOf(string2Up.charAt(i)) == -1) {
            return false
        }

    }
    for (let j in string1Up) {
        if (string2Up.indexOf(string1Up.charAt(j)) == -1) {
            return false
        }
    }

    return true
}

console.log(contemStrings(stringMa, stringMi))