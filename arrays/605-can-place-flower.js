/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let nextToPrevFlowerPos = 0,
        result = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            result += Math.trunc((i - nextToPrevFlowerPos) / 2)
            if (result >= n) return true
            nextToPrevFlowerPos = i + 2
        }
    }

    result += Math.trunc((flowerbed.length + 1 - nextToPrevFlowerPos) / 2)
    return result >= n
};

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 1))
    // [1,0,0,0,0,1]
    // [1,0,0,0,1,0,0]
