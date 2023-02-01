/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alphabet = [...Array(26).keys()].map(i => {
        return String.fromCharCode(i + 65)
    })

    let res = ''
    while (columnNumber > 0) {
        columnNumber--
        res = alphabet[columnNumber % 26] + res
        columnNumber = Math.floor(columnNumber / 26)
    }
    return res
};
