class Solution {
    solve(nums) {
        let a = {};

        let b = new Set([...nums].sort((a, b) => b - a));
        let c = Array.from(b);

        for (let i = 0; i < c.length; i++) {
            a[c[i]] = i;
        }
        return nums.map(num => a[num]);



        // let sorted = new Set([...nums].sort((a, b) => b - a))
        // let arr = Array.from(sorted)
        // let map = {}
        // for (let i = 0; i < arr.length; i++) {
        //     map[arr[i]] = i
        // }

        // return nums.map(num => map[num])

    }
}
