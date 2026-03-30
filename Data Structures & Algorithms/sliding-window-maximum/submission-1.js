class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let q = [];
        let l = 0;
        let r = 0;

        while(r < nums.length) {
            while(q.length > 0 && nums[q.at(-1)] < nums[r]) {
                q.pop();
            }
            q.push(r);

            if(l > q[0]) {
                q.shift();
            }

            if(r - l +1 >= k) {
                result.push(nums[q[0]]);
                l++;
            }

            r++;
        }

        return result;
    }
}
