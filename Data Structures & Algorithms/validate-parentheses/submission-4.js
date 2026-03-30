class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false
        let syntax = {
            ')': '(',
            '}': '{',
            ']': '[',
        }
        let stack = []

        for(const char of s) {
            if(syntax[char] === undefined) stack.push(char);
            else if(syntax[char] && stack.pop() !==syntax[char]) return false;
        }

        return stack.length === 0;
    }
}
