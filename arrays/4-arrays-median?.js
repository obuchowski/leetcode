var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = 0,
        r1 = nums1.length - 1,
        m1 = Math.floor(r1 / 2),
        l2 = 0,
        r2 = nums2.length - 1,
        m2 = Math.floor(r2 / 2)
    while (l1 <= r1 && l2 <= r2) {

        let delta = Math.min(r1 - m1, r2 - m2)
        if (nums1[m1] > nums2[m2]) {
            r1 -= delta + 1;
            l2 += delta + 1;
        } else {
            l1 += delta + 1;
            r2 -= delta + 1;

        }
        m1 = Math.floor((r1 + l1) / 2)
        m2 = Math.floor((r2 + l2) / 2)
    }

    if (l1 > r1 && l2 > r2) {
        return r1 < 0
            ? (nums1[l1] + nums2[r2]) / 2
            : (nums1[r1] + nums2[l2]) / 2
    }

    let isOdd = (nums1.length + nums2.length) % 2;
    if (l2 > r2) {
        return isOdd
            ? nums1[m1]
            : (nums1[m1] + nums1[m1 + 1]) / 2
    }

    return isOdd
        ? nums2[m2]
        : (nums2[m2] + nums2[m2 + 1]) / 2
}

console.log(findMedianSortedArrays([1,3],[2,2]))

// ========================================================================
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    let n = nums1.length - 1,
        m = nums2.length - 1
    for(let i = n + m + 1; i >= 0 && m > -1 ; i--) {
        if (n >= 0 && nums1[n] > nums2[m]) {
            nums1[i] = nums1[n]
            n--
        } else {
            nums1[i] = nums2[m]
            m--
        }
    }

    return nums1.length % 2
        ? nums1[(nums1.length - 1) / 2]
        : (nums1[nums1.length / 2] + nums1[(nums1.length - 2) / 2]) / 2
};