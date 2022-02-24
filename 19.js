class Solution {
    solve(board, word) {

        for (let r of board) {
            if (r.join("").split(",").join("").includes(word)) return true;
        }

        let a = board.map((tmp, colIndex) => board.map(row => row[colIndex]));

        for (let c of a) {
            if (c.join("").split(",").join("").includes(word)) return true;
        }
        return false;
    }
}
