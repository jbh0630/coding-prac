class Solution {
    solve(root) {

        function invert(root) {
          if (root != null) {
            let temp = invert(root.left);
            root.left = invert(root.right);
            root.right = temp;
            }
        return root;
        }

        return invert(root);
    }
}
