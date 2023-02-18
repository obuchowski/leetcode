/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false
    let count = 0
    while (!(n & 1)) {
        n >>= 1
        count++
    }

    return n === 1 && !(count & 1)
};


isPowerOfFour(-2147483648)