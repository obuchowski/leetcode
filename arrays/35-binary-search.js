/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0,
        r = nums.length - 1,
        m = Math.floor((l + r) / 2)
    while(l <= r) {
        if (nums[m] === target) return m
        if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
        m = Math.floor((l + r) / 2)
    }

    return l
}