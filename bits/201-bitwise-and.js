/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    if (right >> 1 >= left) {
        return 0
    }
    let  i = 0
    while(left !== right){
        i++
        left >>= 1
        right >>= 1

    }
    return left << i
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAndMy = function(left, right) {
    if (right >>> 1 >= left) {
        return 0
    }
    let result = left
    for (let i = left + 1; i <= right; i++) {
        result &= i
    }

    return result
};