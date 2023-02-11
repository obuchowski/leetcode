/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = n & 1
    for(let i = 0; i < 31; i++) {
        n >>>= 1
        result <<= 1
        result |= n & 1
    }

    return result < 0 ? result >>> 0 : result
};