/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary0 = function(a, b) {
    return BigInt(BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let result = "";

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        const sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }

    if (carry) {
        result = "1" + result;
    }

    return result;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinaryMy = function(a, b) {
    if (a.length > b.length) {
        const tmp = a
        a = b
        b = tmp
    }

    const charOne = '1'.charCodeAt(0),
        doubleCharOne = '0'.charCodeAt(0) * 2 + 1
    let ans = '',
        toNext = 0,
        j = b.length - 1
    for (let i = a.length - 1; i >= 0; i--, j--) {
        const char = a.charCodeAt(i) + b.charCodeAt(j) + toNext
        ans = (char & 1) ? '1' + ans : '0' + ans
        toNext = char > doubleCharOne ? 1 : 0
    }

    while (j >= 0)
    {
        const char = b.charCodeAt(j) + toNext
        ans = (char & 1) ? '1' + ans : '0' + ans
        toNext = char > charOne ? 1 : 0
        j--
    }

    if (toNext) {
        ans = '1' + ans
    }

    return ans
};

console.log(addBinary('11', '1'))
// console.log('2' & 'a' )
// console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
//     '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'))