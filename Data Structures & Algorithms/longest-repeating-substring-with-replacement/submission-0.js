class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let topFreq = 0;
        let left = 0;
        let right = 0;
        let charMap = {};
        while (right < s.length) {
            const rightChar = s[right];
            charMap[rightChar] = (charMap[rightChar] || 0) + 1;
            topFreq = Math.max(topFreq, charMap[rightChar]);
            while (right - left + 1 -  topFreq > k) {
                let leftChar = s[left];
                charMap[leftChar]--;
                left++;
            }

            longest = Math.max(right - left + 1, longest);

            right++;
        }
        return longest
    }

}
