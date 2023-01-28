/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return []
    nums.sort((a, b) => a - b)
    let answ = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] < target) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            if (nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] < target) continue
            for (let k = j + 1; k < nums.length - 1; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) continue
                if (nums[i] + nums[j] + nums[k] + nums[nums.length - 1] < target) continue
                for (let l = k + 1; l < nums.length; l++) {
                    if (l > k + 1 && nums[l] === nums[l - 1]) continue
                    if (nums[i] + nums[j] + nums[k] + nums[l] === target)
                        answ.push([nums[i], nums[j], nums[k], nums[l]])
                    if (nums[i] + nums[j] + nums[k] + nums[l] >= target) break
                }
            }

        }
    }

    return answ
};