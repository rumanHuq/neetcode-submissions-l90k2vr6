class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        for(let i=0;i<nums.length; i++) {
            let want = target - nums[i];
            if(map[want] !== undefined) {
                return [i, map[want]]
            }
            map[nums[i]] = i
        }
        return []
    }
}
