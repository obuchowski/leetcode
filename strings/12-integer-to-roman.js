/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = number => {
    const Romans = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    const keys = Object.keys(Romans)
    const keysSize = keys.length
    let result = ''

    for (let i = 0; i < keysSize; i ++) {
        while(number >= Romans[keys[i]]) {
            result += keys[i]
            number -= Romans[keys[i]]
        }
    }

    return result
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRomanMy = function(num) {
    const map = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M']
    ]

    let roman = ''
    for (let i = 0; i < 3; i++) {
        let digit = num % 10
        num = Math.trunc(num / 10)
        switch (digit) {
            case 0:
                break;
            case 4:
                roman = map[i][0] + map[i][1] + roman
                break
            case 9:
                roman = map[i][0] + map[i][2] + roman
                break
            default:
                while (digit % 5) {
                    roman = map[i][0] + roman
                    digit--
                }
                if (digit === 5) {
                    roman = map[i][1] + roman
                }
        }
    }

    while (num) {
        roman = map[2][2] + roman
        num--
    }

    return roman
};

console.log(intToRoman(337))