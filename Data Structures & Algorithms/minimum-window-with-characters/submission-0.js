class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need = {};
        let needLength = 0;
        let have = {};
        let haveLength = 0;

        for (const char of t) {
            if (need[char] === undefined) {
                need[char] = 0;
                needLength++;
            }
            need[char]++;
        }

        let left = 0;
        let windowLeft = 0;
        let windowLength = Number.MAX_SAFE_INTEGER;

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];
            have[rightChar] = (have[rightChar] || 0) + 1;

            if (need[rightChar] && need[rightChar] === have[rightChar]) {
                haveLength++;
            }
            while (needLength === haveLength) {
                const range = right - left + 1;

                if (range < windowLength) {
                    windowLength = range;
                    windowLeft = left;
                }
                const leftChar = s[left];
                have[leftChar]--;
                if (need[leftChar] !== undefined && need[leftChar] > have[leftChar]) {
                    haveLength--;
                }
                left++;
            }
        }
        if (windowLength === Number.MAX_SAFE_INTEGER) return "";

        return s.slice(windowLeft, windowLeft + windowLength);
    }
}
