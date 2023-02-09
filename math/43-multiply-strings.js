/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }

    if (num2.length < num1.length) {
        let tmp = num1
        num1 = num2
        num2 = tmp
    }

    let result = ''
    for (let i = num1.length - 1; i >= 0; i--) {
        let toNext = 0,
            step = ''
        for (let j = num2.length - 1; j >=0 ; j--) {
            let a =  num1[i] * num2[j] + toNext
            step = a % 10 + step
            toNext = Math.floor(a / 10)

        }
        if (toNext) {
            step = toNext + step
        }

        toNext = 0
        let oldResult = result
        result = ''
        for (let k = oldResult.length - 1, l = step.length - 2 + i; k >= 0 || l >= 0;k--, l--) {
            let a = (oldResult[k] ? oldResult.charAt(k) - '0' : 0)
                + (step[l] ? step.charAt(l) - '0' : 0)
                + toNext
            result = a % 10 + result
            toNext = Math.floor(a / 10)
        }

        if (toNext) {
            result = toNext + step
        }

        if (result[0] === '0') {

        }
    }

    return result
};

console.log(multiply('21', '10'))
console.log(multiply('10', '21'))
// console.log(multiply('123456789', '987654321'))
// console.log(multiply('123456789', '987654321'))