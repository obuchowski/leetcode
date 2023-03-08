/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 0,
        r = Math.max(...piles)
    if (piles.length === h) {
        return r
    }

    while (l <= r) {
        let currH = 0
        const m = l + Math.trunc((r - l) / 2)
        for (let i = 0; i < piles.length /* && currH <= h */; i++) {
            currH += Math.ceil(piles[i] / m)
        }

        if (currH <= h) {
            r = m - 1
        } else {
            l = m  + 1
        }
    }

    return l
}

console.log(minEatingSpeed([3,6,7,11], 8))