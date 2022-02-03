class Solution {
    public int solve(Tree root) {
        if (root == null) {
            return 0;
        }

        int l = solve(root.left);
        int r = solve(root.right);

        return root.val + l + r;
    }
}
