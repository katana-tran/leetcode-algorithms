// https://leetcode.com/problems/buddy-strings/submissions/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let inputArrayA = A.split("")
    let charArr = [[],[]]
    if (A.length !== B.length){ return false} 

    for (characterIndex in inputArrayA){
        if (inputArrayA[characterIndex] === B.charAt(characterIndex)) {
            continue
        } else {
            charArr[0].push(inputArrayA[characterIndex])
            charArr[1].push(B.charAt(characterIndex))
        }
    }    
    if (charArr[0].reverse().join() == charArr[1].join() && charArr[0].length == 2) { 
        return true
    } 
    if (charArr[0].length == 0 && charArr[1].length == 0){
        let checkSet = new Set(A.split(""))
        if (checkSet.size !== inputArrayA.length){
            return true
        }
    } 
    return false
};