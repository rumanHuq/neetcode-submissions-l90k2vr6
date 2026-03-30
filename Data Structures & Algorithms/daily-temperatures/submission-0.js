class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = new Array(temperatures.length).fill(0);

        for(let i=0; i< temperatures.length; i++){
            while(stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
                const stackTop =  stack.pop();
                result[stackTop] = i - stackTop;
            }
            stack.push(i)
        }

        return result;
    }
}
