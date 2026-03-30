class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unique = new Set(nums);
        let longest = 0;

        for (let num of unique) {
            if (unique.has(num - 1) === false) {
                let range = 1;

                while (unique.has(num + range)) {
                    range++;
                }
                longest = Math.max(longest, range);
            }
        }

        return longest;
    }
}
