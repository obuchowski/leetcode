const singleNumber = function (nums) {
    let xy = 0;
    for (let num of nums) {
        xy = xy ^ num;
    }
    xy = xy & -xy;
    let res = [0, 0];
    for (let num of nums) {
        if (xy & num) {
            res[0] = res[0] ^ num;
        } else {
            res[1] = res[1] ^ num;
        }
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumberMy = function(nums) {
    const set = new Set(nums),
        result = new Set(set)
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            result.delete(nums[i])
            if (result.size === 2) {
                break
            }
        } else {
            set.delete(nums[i])
        }
    }
    return [...result]
};

console.log(singleNumber([3,5,1,1,2,2]))