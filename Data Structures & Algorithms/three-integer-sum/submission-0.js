class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.toSorted((a, b) => a - b);
        const result = [];
        for (let i = 0; i < sorted.length - 2; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;

            let j = i + 1;
            let k = sorted.length - 1;

            while (j < k) {
                const sum = sorted[i] + sorted[j] + sorted[k];
                if (sum === 0) {
                    result.push([sorted[i], sorted[j], sorted[k]]);

                    while (j < k && sorted[j] === sorted[j + 1]) j++;
                    while (j < k && sorted[k] === sorted[k - 1]) k--;
                    j++;
                    k--;

                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return result;
    }
}
