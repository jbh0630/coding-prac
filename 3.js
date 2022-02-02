class Solution {
    solve(words) {
        let t = {};
        let count = 0;
        for (let word of words) {
          let tmp = word.split('').sort().join('');
          if (!t[tmp]) {
              t[tmp] = word;
              count++;
          } else if (!(t[tmp] + t[tmp]).includes(word)) {
              count++;
          }
        }
          return count;

    }
}
