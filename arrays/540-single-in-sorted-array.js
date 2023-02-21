/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0,
        r = nums.length - 1,
        m = Math.trunc(l + (r - l) / 2)
    while (l <= r) {
        if (m === nums.length - 1 || m === 0) {
            return nums[m]
        }

        if (
            (!(m % 2) && (nums[m] === nums[m + 1]))
            || ((m % 2) && (nums[m] === nums[m - 1]))
        ) {
            l = m + 1
            m = Math.trunc(l + (r - l) / 2)
        } else if (
            ((m % 2) && (nums[m] === nums[m + 1]))
            || (!(m % 2) && (nums[m] === nums[m - 1]))
        ) {
            r = m - 1
            m = Math.trunc(l + (r - l) / 2)
        } else {
            return nums[m]
        }
    }


}

console.log(singleNonDuplicate([3,3,7,7,10,11,11]))
