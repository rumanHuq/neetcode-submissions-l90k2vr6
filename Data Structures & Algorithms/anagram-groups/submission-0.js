class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /** @type {Record<string, string[]>} */
        const map = {};
        strs.forEach((str, idx) => {
            const key = str.split('').sort().join('');
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        });

        return Object.values(map);
    }
}
