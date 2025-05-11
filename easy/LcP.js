/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";
    let minLen = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        const len = strs[i].length;
        if(len < minLen) {
            minLen = len
        }
    }
    let prefix = new Array(minLen+1);
    for (let i = 0; i < minLen; i++) {
        let c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if(strs[j][i] != c) {
                return prefix.join('').toString();
            } 
        }
        prefix[i] = c;
    }
    return prefix.join('').toString();
};

strs = ["dog","racecar","car"];

longestCommonPrefix(strs);
