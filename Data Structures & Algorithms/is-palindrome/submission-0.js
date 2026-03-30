class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let leftPointer = 0;
        let rightPointer = sanitized.length - 1;

        while (leftPointer < rightPointer) {
            if (sanitized[leftPointer] !== sanitized[rightPointer]) return false;
            leftPointer++;
            rightPointer--;
        }

        return true;
    }
}
