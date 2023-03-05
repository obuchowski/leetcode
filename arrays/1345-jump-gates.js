/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    if (arr.length === 1) {
        return 0
    }

    const valuePositionsMap = new Map()
    for (let i = 0; i < arr.length; i++) {
        const indexes = valuePositionsMap.get(arr[i]) ?? []
        indexes.push(i)
        valuePositionsMap.set(arr[i], indexes)
    }

    let step = 1
    let currLevel = new Set([0])
    while (currLevel) {
        const nextLevel = new Set()
        for (const index of currLevel) {
            if (
                index === arr.length
                || index + 2 === arr.length
                || arr[index] === arr[arr.length - 1]
            ) {
                return step
            }

            const sameNeighbours = valuePositionsMap.get(arr[index])
            if (sameNeighbours) {
                valuePositionsMap.delete(arr[index])
                for (const sameNeighbour of sameNeighbours) {
                    nextLevel.add(sameNeighbour)
                }
            }

            if (valuePositionsMap.get(arr[index + 1])) {
                nextLevel.add(index + 1)
            }

            if (valuePositionsMap.get(arr[index - 1])) {
                nextLevel.add(index - 1)
            }

            nextLevel.delete(index)
        }

        step++
        currLevel = nextLevel
    }

    return -1
}

console.log(minJumps([11,22,7,7,7,7,7,7,7,22,13]))
