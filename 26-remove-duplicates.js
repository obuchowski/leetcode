/**
 * @param {?number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 1) {
        return 1
    }

    let k = nums.length
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === null) {
            continue
        }

        let n = 1
        while(nums[i] === nums[i + n]) {
            if (nums.length <= i + n) {
                break
            }

            nums[i+n] = null
            n++
            k--
        }
    }

    let n = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === null) {
            n++
            continue
        }
        if (n === 0) {
            continue
        }

        nums[i - n] = nums[i]
        nums[i] = null
    }

    return k
}

/* ============================================================================================================ */
/**
 * @param {?number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[p] != nums[i]) [
            nums[++p] = nums[i]
        ]
    }

    return ++p;
}

console.log(removeDuplicates([2,3]))