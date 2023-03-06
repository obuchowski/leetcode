/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let l = 0, r = arr.length;
    while(l <= r) {
        let mid = l + Math.floor((r - l) / 2)
        if( arr[mid] - mid - 1 < k) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l + k
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositiveMy = function(arr, k) {
    let l = 0,
        r = arr.length - 1
    while(true) {
        const m = Math.trunc(l + (r - l) / 2)
        if (arr[m] > m + k) {
            if (m === 0) {
                return k
            }

            if (arr[m - 1] <= (m - 1) + k) {
                //between
                return m + k
            }
            r = m - 1

        } else {
            if (m === arr.length - 1) {
                return arr.length + k
            }

            if (arr[m + 1] > m + 1 + k) {
                // between
                return m + k + 1
            }
            l = m + 1
        }
    }
}

console.log(findKthPositive([1,2,3,4],5))