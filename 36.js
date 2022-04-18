var climbStairs = function(n) {

    let pre = 0;
    let cur = 1;
    let tmp;

    for (let i = 0; i < n; i++) {
        tmp = pre;
        pre = cur;
        cur += tmp;
    }

    return cur;

};
