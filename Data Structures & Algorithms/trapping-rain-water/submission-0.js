class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftPtr = 0;
        let rightPtr = height.length - 1;
        let leftMax = height[leftPtr];
        let rightMax = height[rightPtr];
        let water = 0;

        while (leftPtr < rightPtr) {
            if (leftMax < rightMax) {
                leftPtr++;
                leftMax = Math.max(leftMax, height[leftPtr]);
                water += leftMax - height[leftPtr]
            } else {
                rightPtr--;
                rightMax = Math.max(rightMax, height[rightPtr]);
                water += rightMax - height[rightPtr]
            }
        }

        return water;
    }
}
