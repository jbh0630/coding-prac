class Solution {
    solve(path) {
       if (path.length < 1) return [];
        let result = [];

        for (const p of path) {
            if (p === "..") {
                result.pop();
            } else if (p === ".") {
                continue;
            } else {
                result.push(p);
            }
        }
        return result;
    }
}
