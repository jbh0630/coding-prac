class Solution {
    solve(s) {
        let sum = 0;
        let num = '';
        s = s+"a";

        for (let i = 0; i < s.length; i++) {
            const psNum = parseInt(s[i]);
            if (isNaN(psNum)) {
                if (num) {
                    sum += parseInt(num);
                    num = '';
                }
            } else {
                num += s[i];
            }

        }
        return sum;
    }
}
