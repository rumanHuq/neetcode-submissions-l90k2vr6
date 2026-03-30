function mapEqual(a,b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (a[key] !== b[key]) {
            return false;
        }
    }

    return true;
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const need = {}
        const have = {}
        let left = 0;

        for (const char of s1) {
            need[char] = (need[char] || 0) + 1;
        }

        for (let right = 0; right < s2.length; right++) {
            let rightChar = s2[right];
            have[rightChar] = (have[rightChar] || 0) + 1;

            if (right - left + 1 > s1.length) {
                const leftChar = s2[left]
                have[leftChar]--;
                if (have[leftChar] === 0) delete have[leftChar];
                left++;
            }

            if (right - left + 1 === s1.length && mapEqual(have, need)) {
                return true
            }
        }

        return false;
    }
}
