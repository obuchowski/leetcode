/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length) return []

    let answer = [],
        initPChars = new Map(),
        currentPChars = new Map()
    for(let i = 0; i < p.length; i++) {
        currentPChars.set(p[i], (currentPChars.get(p[i]) ?? 0) + 1)
        initPChars.set(p[i], (initPChars.get(p[i]) ?? 0) + 1)
    }

    let i = 0,
        jShift = p.length
    while(i <= s.length - p.length) {
        let j = i + p.length - jShift
        while (j - i < p.length) {
            let leftInMap = currentPChars.get(s[j]) ?? 0
            if (leftInMap > 0) {
                currentPChars.set(s[j], leftInMap - 1)
                if (j - i === p.length - 1) {
                    answer.push(i)
                    currentPChars.set(s[i], 1)
                    jShift = 1
                }
            } else {
                currentPChars = new Map(initPChars)
                jShift = p.length
                if (!initPChars.has(s[j])) { //if unused symbol appeared
                    i = j
                }
                break
            }
            j++
        }
        i++
    }

    return answer
};