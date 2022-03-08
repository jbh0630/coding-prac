var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target || target < nums[i]) {
            return i;
        }
    }
    return nums.length;
};
