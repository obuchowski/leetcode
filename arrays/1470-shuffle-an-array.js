/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    for (let i = n; i < nums.length; i++) {
        nums[i] = nums[i] << 10 | nums[i - n]
    }

    for (let i = 0, j = n; j < nums.length; j++) {
        nums[i++] = nums[j] & 1023
        nums[i++] = nums[j] >> 10
    }

    return nums
};