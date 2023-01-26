/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m--
    n--
    for (let i = m + n + 1; i >= 0; i--) {
        if (n < 0) break
        if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[i] = nums1[m]
            m--;
        } else {
            nums1[i] = nums2[n]
            n--;
        }
    }
}
