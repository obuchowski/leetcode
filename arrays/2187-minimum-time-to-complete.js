/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    const minTime = Math.min(...time)
    let l = minTime, r = minTime * totalTrips
    while (l <= r) {
        const m = Math.trunc((r - l) / 2) + l

        let trips = 0
        for(let i = 0; i < time.length; i++){
            trips += Math.trunc(m / time[i]);
        }

        if (trips >= totalTrips) {
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return l
}

console.log(minimumTime([1,2,3], 5))