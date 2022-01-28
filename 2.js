class Solution {
    solve(nums) {
        let tmp = {};

        if (nums.length <= 1) {
            return false;
        }

        nums.forEach(num => {
            if (!tmp[num]) {
                tmp[num] = 0;
            }
            tmp[num]++;
        });


        const a = Object.values(tmp).reduce((acc, val) => {
            if (acc == 0) {
                return val;
            }

            while(val != 0) {
                [acc, val] = [val, acc % val];
            }
            return acc;
        }, 0);

        return a !== 1;
    }
}
