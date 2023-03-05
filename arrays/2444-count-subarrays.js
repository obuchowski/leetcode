/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let leftBound = -1,
        closestMinPos = -1,
        closestMaxPos = -1,
        count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === minK) {
            closestMinPos = i
        }
        if (nums[i] === maxK) {
            closestMaxPos = i
        }
        if (nums[i] < minK || nums[i] > maxK) {
            leftBound = i
        }

        const subArrays = Math.min(closestMinPos, closestMaxPos) - leftBound
        count += Math.max(subArrays, 0)
    }

    return count
};

console.log(countSubarrays([1,1,3,5,2,5,5], 1, 5))