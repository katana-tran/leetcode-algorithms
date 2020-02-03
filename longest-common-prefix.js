
//https://leetcode.com/problems/longest-common-prefix/submissions/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 1){
        return ""
    } else if (strs.length === 1){
        return strs[0]
    }
    let longestPrefix = strs[0]
    let currentWord = strs[0]
    
    for(let count=1; count < strs.length; count++){
        let characterCount = 0
        while(strs[count].charAt(characterCount) === currentWord.charAt(characterCount) && characterCount < strs[count].length && characterCount < currentWord.length){
            characterCount++
        }
        if (characterCount === 0){
            return ""
        }
        let trialPrefix = strs[0].slice(0, characterCount)    
        if (trialPrefix.length < longestPrefix.length) {
            longestPrefix = trialPrefix
        }
    }
    return longestPrefix
    
};