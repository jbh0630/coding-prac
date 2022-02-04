class Solution {
    solve(nums) {
        let t = {};

        for (let n of nums) {
            if (!t[n]) {
                t[n] = 0;
            }
            t[n]++;
        }
        const gcd = Object.values(t).reduce((acc, num) => {
            if (acc == 0) {
                return num;
            }

            while (num != 0) {

                [acc, num] = [num, acc % num];

            }

            return acc;
        }, 0);

        return gcd !== 1;
    }
}
