/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(),
        start = 0,
        maxLength = 0
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) >= start) {
            maxLength = Math.max(maxLength, i - start)
            start = map.get(s[i]) + 1
        }
        map.set(s[i], i)
    }

    return  Math.max(maxLength, s.length - start)
};


console.log(lengthOfLongestSubstring('pwwkwewd'))