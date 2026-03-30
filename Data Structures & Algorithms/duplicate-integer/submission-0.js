class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let maps = {}
        for(let i = 0; i < nums.length; i++) {
            if(typeof maps[nums[i]] === 'undefined') {
                maps[nums[i]] = 1
            }
            else return true
        }
        return false
    }
}
