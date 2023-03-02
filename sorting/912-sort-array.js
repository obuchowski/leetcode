/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums, l = 0, r = nums.length - 1) {
    if (l >= r) return nums
    let i = l, j = r, pivot = nums[l]
    while (i < j) {
        while (i < j && nums[j] > pivot) j--
        while (i < j && nums[i] <= pivot) i++
        if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    [nums[i], nums[l]] = [nums[l], nums[i]]

    sortArray(nums, l, i - 1)
    sortArray(nums, i + 1, r)

    return nums
}

//fastet quick
var sortArray = function(nums) {

    const quickSort = (start, end)=>{
        if(start >= end) return;

        let left = start;
        let right = end;

        const pivot = nums[Math.floor(start+(end-start)/2)];

        while(left<= right){
            while(left <= right && pivot > nums[left]){
                left++;
            }
            while(left <=right && pivot < nums[right]){
                right--;
            }
            if(left <=right){
                [nums[left], nums[right]]= [nums[right], nums[left]];
                left++;
                right--;
            }
        }
        quickSort(start, right);
        quickSort(left, end);
    }

    if(nums.length===1) return nums;

    quickSort(0, nums.length-1);
    return nums;
};

// Counting Sort
var sortArray = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const counts = Array(max-min+1).fill(0);

    for (const num of nums) {
        counts[num-min]++;
    }

    let i = 0;
    for(let j = 0; j < counts.length; j++) {
        while(counts[j]) {
            nums[i] = min+j;
            i++;
            counts[j]--;
        }
    }

    return nums;
};

console.log(sortArray([5,1,1,2,0,0]))