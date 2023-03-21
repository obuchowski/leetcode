// TOPIC: ARRAY, MATH
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let result = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            count++;
        }else{
            if(count){
                let n = count*(count+1)/2;
                result += n;
            }
            count = 0;
        }
    }
    if(count){
        result += count*(count+1)/2;
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarrayMy = function(nums) {
    let prevNonZero = nums[0] === 0 ? -1 : 0,
        subArrayAmount = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
            subArrayAmount += (i - 1 - prevNonZero) * (i - prevNonZero) / 2
            prevNonZero = i
        }
    }

    subArrayAmount += (nums.length - 1 - prevNonZero) * (nums.length - prevNonZero) / 2
    return subArrayAmount
};

console.log(zeroFilledSubarray([0,0,0,1,0,0]))
