/**
 * @param {string} s
 * @return {number}
 */

 // https://leetcode.com/problems/longest-substring-without-repeating-characters/
 
var lengthOfLongestSubstring = function(s) {
    let longestLength = 0 
    let wordSet = new Set()
    let startInterval = 0
    let endInterval = 0
    while(startInterval < s.length && endInterval < s.length){
        if (!wordSet.has(s.charAt(endInterval))){
            wordSet.add(s.charAt(endInterval))
            endInterval++
        } else {
            wordSet.size > longestLength? longestLength = wordSet.size : null
            wordSet.clear()
            startInterval++
            endInterval = startInterval
        }
    }
    wordSet.size > longestLength? longestLength = wordSet.size : null
    return longestLength
};