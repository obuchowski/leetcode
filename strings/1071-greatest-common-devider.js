var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ''
    return str1.substring(0, (function gcd(a, b) {
        return b ? gcd(b, a % b) : a
    })(str1.length, str2.length))
};

var gcdOfStrings1 = function(str1, str2) {
    if (str1 === str2) {
        return str1
    }

    if (str1.length < str2.length) {
        let temp = str1
        str1 = str2
        str2 = temp
    }

    if (str1.substring(0, str2.length) !== str2) {
         return ''
    }

    return gcdOfStrings(str1.substring(str2.length), str2)
};


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStringsMy  = function(str1, str2) {
    let strShort,
        strLong,
        lengthGcd = 1,
        gcd = ''
    if (str1.length < str2.length) {
        strShort = str1
        strLong = str2
    }  else {
        strLong = str1
        strShort = str2
    }

    for (let i = 2; i <= strShort.length; i++) {
        if (str1.length % i === 0 && str2.length % i === 0) {
            lengthGcd = i
        }
    }

    let i
    for (i = 0; i < strShort.length; i++) {
        if (str1[i] !== str2[i] || lengthGcd <= i) {
            break;
        }
        gcd += str1[i]
    }

    while (i < strLong.length) {
        if (
            (i < strShort.length && strShort[i] !== gcd[i % gcd.length])
            || strLong[i] !== gcd[i % gcd.length]
        ) {
            return ''
        }

        i++
    }

    return gcd
};

console.log(gcdOfStrings('AAAAABAAAAAB', 'AAAAAB'))
console.log(gcdOfStrings('AFBCDEFD', 'AFBCDEFAFBCDEF'))
console.log(gcdOfStrings('ABABAB', 'ABAB'))