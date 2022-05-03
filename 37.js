var merge = function(nums1, m, nums2, n) {

    let length = m + n - 1;

    m--;n--;

    for(let i = length; i >= 0; i--) {

    if (n < 0) {
      break
    }

    if (m >= 0 && nums1[m] > nums2[n]) {
      nums1[i] = nums1[m--]
    } else {
      nums1[i] = nums2[n--]
    }

    }
    return nums1;
};
