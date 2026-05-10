class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let dic = {}

        for(let i = 0; i< s.length ; i++) {
            dic[s[i]] = dic[s[i]] === undefined ? 1:  dic[s[i]]+1
        }

        for(let i = 0; i< t.length ; i++) {
            if(dic[t[i]] === undefined) return false
            dic[t[i]] --
            if(dic[t[i]] === 0) {
                delete dic[t[i]]
            }
        }
        
        return Object.keys(dic).length === 0
    }
}
