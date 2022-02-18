var removeDuplicates = function(nums) {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast];
        }
    }
    return slow + 1;
};
