class Solution {
    solve(head, pos, val) {
        if (pos == 0) {
            const temp = new LLNode(val, head);
            return temp;
        }
        let temp = head;
        const node = new LLNode(val);
        while (pos > 1) {
            temp = temp.next;
            pos --;
        }
        node.next = temp.next;
        temp.next = node;
        return head;
    }
}
