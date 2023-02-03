/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function(pattern, s) {
    let map = new Map(),
        foundWords = new Set(),
        start = -1
    for (let i = 0; i < pattern.length; i++) {
        if (!start) {
            return false
        }
        let end = s.indexOf(' ', start + 1),
            subs = s.substring(start + 1, start = end === -1 ? undefined : end)
        if (!map.has(pattern[i])) {
            if (foundWords.has(subs)) {
                return false
            }
            map.set(pattern[i], subs)
            foundWords.add(subs)
        } else if (map.get(pattern[i]) !== subs) {
            return false
        }
    }

    return !start
};