class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            map[element] = map[element] === undefined ? 1 : map[element] + 1;
        }

        let result = Object.entries(map);
        let swapped = false;

        do {
            swapped = false;
            for (let i = 0; i < result.length - 1; i++) {
                if (result[i][1] < result[i + 1][1]) {
                    [result[i], result[i + 1]] = [result[i + 1], result[i]];
                    swapped = true;
                }
            }
        } while (swapped);

        return result
            .slice(0, k)
            .map(([k]) => parseInt(k));
    }
}
