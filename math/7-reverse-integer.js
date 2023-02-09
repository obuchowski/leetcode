/**
 * @param {number} x
 * @return {number
 */
var reverse = function(x) {
    let result = 0
    while (x) {
        result = result * 10 + x % 10;
        x = Math.trunc(x / 10)
    }
    if (result > Math.pow(2, 31) - 1 || result < -1 * Math.pow(2, 31)) {
        return 0
    }
    return result
};