solve(s0, s1) {
        let result = "";
        let maxLen = Math.max(s0.length, s1.length);

        for (let i = 0; i < maxLen; i++) {
            if (s0[i]) {
                result += s0[i];
            }
            if (s1[i]) {
                result += s1[i];
            }
        }
        return result;
    }
