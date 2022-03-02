class Solution {
    solve(matrix) {

        const rows = matrix.length;
        if (rows === 0) return 0;
        const cols = matrix[0].length;
        if (cols === 0) return 0;

        const countPerRow = Array(rows).fill(0)
        const countPerCol = Array(cols).fill(0)

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] == 1) {
                    countPerRow[i]++;
                    countPerCol[j]++;
                }
            }
        }

        let count = 0
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (
                    matrix[i][j] == 1 &&
                    countPerRow[i] == 1 &&
                    countPerCol[j] == 1
                ) {
                    count++;
                }
            }
        }
        return count
    }
    }
