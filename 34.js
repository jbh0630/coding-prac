var deleteDuplicates = function(head) {

    let cur = head;

    while(cur) {
        if (cur.next !== null && cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next
        }
    }

    return head;

};
