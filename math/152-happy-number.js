/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set([1])
    while (!seen.has(n)) {
        seen.add(n)
        let tmp = 0
        while (n !== 0) {
            tmp += Math.pow(n % 10, 2)
            n = Math.floor(n / 10)
        }
        n = tmp
    }

    return n === 1
};

console.log(isHappy(998))