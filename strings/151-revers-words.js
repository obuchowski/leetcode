/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = '',
        word = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (word !== '') {
                res = ' ' + word + res
                word = ''
            }
        } else {
            word += s[i]
        }
    }

    if (word !== '') {
        res = ' ' + word + res
    }

    return res.substring(1)
};