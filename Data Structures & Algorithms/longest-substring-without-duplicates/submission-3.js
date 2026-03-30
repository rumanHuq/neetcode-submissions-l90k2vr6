class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLen = 0;
        let charMap = {};

        for (let right = 0; right < s.length; right++) {
            const element = s[right];

            if (charMap[element] !== undefined && charMap[element] >= left) {
                left = charMap[element] + 1;
            }
            charMap[element] = right;
            maxLen = Math.max(right - left + 1, maxLen);
        }
        return maxLen;
    }
}
