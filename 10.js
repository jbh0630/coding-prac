class Solution {
    solve(nums) {

        nums = nums.map(num => num ** 2);

        for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j < nums.length; j++) {
                if (nums.includes(nums[i] + nums[j])) {
                    return true;
                }
            }

        }
        return false;
    }
}
