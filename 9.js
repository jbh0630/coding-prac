class Solution {
    solve(intervals) {
        if (intervals.length <= 1) {
            return false;
        }

        intervals.sort((a, b) =>  a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i - 1][0] == intervals[i][0] || intervals[i - 1][1] >= intervals[i][1]) {

                return true;

            }
        }
        return false;
    }
}
