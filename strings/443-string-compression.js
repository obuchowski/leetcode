/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let p = 0,
        counter = 1
    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            counter++
        } else {
            chars[p++] = chars[i - 1]
            if (counter > 1) {
                const counterChars = counter.toString().split('')
                for (const counterChar of counterChars) {
                    chars[p++] = counterChar
                }

                counter = 1
            }
        }
    }

    return p
}