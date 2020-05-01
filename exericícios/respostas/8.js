function compareScores(scores) {

    const stringToArray = scores.split(' ')
    for (i in stringToArray) {
        stringToArray[i] = parseInt(stringToArray[i])
    }
    let recordCount = 0
    let worstScore = stringToArray[0]
    let recordValue = stringToArray[0]
    const result = []
    let worstMatch = 1

    for (i = 1; i < stringToArray.length; i++) {


        if (stringToArray[i] > recordValue) {
            recordCount++
            recordValue = stringToArray[i]
        }

        if (stringToArray[i] < worstScore) {
            worstScore = stringToArray[i]
            worstMatch = i + 1
        }

    }

    result.push(recordCount, worstMatch)
    console.log(result)

}

compareScores('41 40 20 4 51 25 80 38 56 5')



