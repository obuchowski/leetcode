/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let resultArray = [],
        toNext = 0
        m = num1.length + num2.length - 2
    for (let i = num1.length - 1; i >= 0; i--) {
        toNext = 0
        for(let j = num2.length - 1; j >= 0 ; j--) {
            let result = (num1.charAt(i) - '0') * (num2.charAt(j) - '0')
                + (resultArray[m - i - j] ?? 0)
                + toNext
            resultArray[m - i - j] = result % 10
            toNext = Math.floor(result / 10)
        }

        let n = 1
        while (toNext) {
            resultArray[m - i + n] = (resultArray[m - i + n] ?? 0) + toNext
            toNext = resultArray[m - i + n] > 9 ? 1 : 0
            n++
        }
    }

    let n = 1
    while (toNext) {
        resultArray[m + n] = (resultArray[m + n] ?? 0) + 1
        toNext = resultArray[m + n] > 9 ? 1 : 0
        n++
    }

    let result = '',
        i = resultArray.length - 1
    while (i > 0)  {
        if (resultArray[i] !== 0) break
        resultArray.pop()
        i--
    }
    for(let i = resultArray.length - 1; i >= 0 ; i--) {
        result += resultArray[i]
    }
    return result
}