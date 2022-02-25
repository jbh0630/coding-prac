class Solution {
    solve(nums) {
        if (nums.length <= 1) {
            return [];
        }

        return nums.reduce((acc, num, i) => {
            let isPeak = false;
            if (i == 0) {
                isPeak = nums[i] > nums[i + 1];
            } else if (i == nums.length - 1) {
                isPeak = nums[i] > nums[i - 1];
            } else {
                isPeak = nums[i - 1] < nums[i] && nums[i] > nums[i + 1];
            }
            isPeak && acc.push(i)

            return acc
        }, []);
    }

}
