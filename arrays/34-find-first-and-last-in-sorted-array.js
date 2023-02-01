/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = -1,
        l = 0,
        r = nums.length - 1,
        m,
        rAtFirstFound = -1
    if (target > nums[r] || target < nums[l]) {
        return [-1, -1];
    }

    while (l <= r) {
        m = Math.floor((r + l) / 2)
        if (target > nums[m]) {
            l = m + 1;
        } else {
            if (rAtFirstFound === -1 && target === nums[m]) {
                rAtFirstFound = r;
            }
            r = m - 1;
        }
    }
    if (target !== nums[l]) {
        return [-1, -1];
    }
    left = l;

    l = m + 1;
    r = rAtFirstFound;
    while (l <= r) {
        m = Math.floor((r + l) / 2);
        if (target >= nums[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return [left, r];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeMy = function(nums, target) {
    let result = [-1, -1],
        l = 0,
        r = nums.length - 1,
        m = Math.floor(r / 2)
    if (target > nums[r] || target < nums[l]) {
        return result
    }

    while (l <= r) {
        if (target === nums[m]) {
            result = [m, m]
            break
        }

        if (target > nums[m])
            l = m + 1
        else
            r = m - 1
        m = Math.floor((r + l) / 2)
    }
    if (result[0] === - 1) return result

    let l1 = l,
        r1 = m - 1,
        m1 = Math.floor((r1 + l1) / 2),
        l2 = m + 1,
        r2 = r,
        m2 = Math.floor((r2 + l2) / 2)
    while (l1 <= r1) {
        if (target === nums[m1] && (m1 === 0 || nums[m1-1] < target)) {
            result[0] = m1
            break
        }

        if (target > nums[m1])
            l1 = m1 + 1
        else
            r1 = m1 - 1
        m1 = Math.floor((r1 + l1) / 2)
    }

    while (l2 <= r2) {
        if (target === nums[m2] && (m2 === nums.length - 1 || nums[m2+1] > target)) {
            result[1] = m2
            break
        }

        if (target >= nums[m2])
            l2 = m2 + 1
        else
            r2 = m2 - 1
        m2 = Math.floor((r2 + l2) / 2)
    }

    return result
};

console.log(searchRange([1,2,3], 2))
let nums = []
for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 10; j++) {
        nums.push(i)
    }
}
//
// // const func = searchRangeMy
const func = searchRange
const start = performance.now()
for (let i = 1900; i < 2100; i++) {
    func(nums, i)
}

const end = performance.now()
console.log(end - start)

