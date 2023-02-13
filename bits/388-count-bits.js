/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0)
    let offset = 1;
    for (let i = 1; i <= n; i++) {
        if (offset << 1 ===  i) {
            offset = i
        }

        ans[i] = 1 + ans[i - offset]
    }

    return ans
}

/**
 * @param {number} n
 * @return {number[]}
 */
var countBitsMy = function(n) {

    const ans = [0]

    for (let i = n; i > 0; i--) {
        const indexes = [i]
        let counter = 0,
            j = i

        while (j) {
            if (ans[j]) {
                counter += ans[j]
                break
            }
            indexes.push(j)

            j &= j - 1
            counter++
        }

        // ans[indexes[0]] = counter
        while (indexes.length) {
            ans[indexes.shift()] = counter--
        }
    }

    return ans
};

const start = Date.now()
const a = countBitsMy(1024 * 1024 * 31)
const end = Date.now()
console.log(end - start)