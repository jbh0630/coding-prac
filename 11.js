class Solution {
    solve(s) {

        let t = [];

       for (let i = 0; i < s.length; i++) {
           if (s[i] == "<" && s[i + 1] == "-") {
               t.pop();
               i++;
               continue;
           }
           t.push(s[i]);
       }

        return t.join("");
    }
}
