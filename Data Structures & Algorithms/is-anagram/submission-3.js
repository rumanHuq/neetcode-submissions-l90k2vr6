class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        
        const sortedS = s.split('').toSorted().join('');
        const sortedT = t.split('').toSorted().join('');
        
        return sortedS === sortedT
    }
}
