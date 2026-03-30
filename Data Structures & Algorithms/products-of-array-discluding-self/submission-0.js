class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let temp = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)];
            result[i] = temp.join('*');
        }

        return result.map(expression => new Function(`return ${expression}`)());
    }
}
