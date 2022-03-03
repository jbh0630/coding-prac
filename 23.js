class Solution {
    solve(s) {
        const swap = s.match(/0{3}|1{3}/g);
        return swap ? swap.length : 0;
    }
}
