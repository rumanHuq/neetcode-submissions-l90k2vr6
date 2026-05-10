class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set()
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i] 
            if(set.has(num)) return true
            set.add(num)
        }
        return false
    }
}
