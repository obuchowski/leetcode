/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const remainders = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (remainders.has(nums[i])) {
            return [i, remainders.get(nums[i])]
        }
        remainders.set(target - nums[i], i)
    }
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumN2 = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        const secondNumber = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === secondNumber) {
                return [i, j]
            }
        }
    }
};