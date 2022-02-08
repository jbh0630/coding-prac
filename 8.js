class Solution {
    solve(n) {
        let tmp = [];
        while (n % 2 == 0) {
            tmp.push(2);
            n /= 2;
        }
        for (let i = 3, limit = Math.sqrt(n); i <= limit; i += 2) {
            while (n % i == 0) {
                tmp.push(i);
                n /= i;
            }
        }
        if (n > 2) {
            tmp.push(n);
        }
        return tmp;
    }
}
