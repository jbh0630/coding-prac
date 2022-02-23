class Solution {
    solve(s) {
        let m = {};
        let result = [];

        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                let subStr = s.slice(i, j);
                let sorted = subStr.split("").sort().join("");
                if (m[sorted]) {
                    m[sorted].push(subStr);
                } else {
                    m[sorted] = [subStr];
                }
            }
        }
        for (let n in m) {
            if (m[n].length > 1) {
                result.push(...m[n]);
            }
        }

        return result.sort();
    }
}
