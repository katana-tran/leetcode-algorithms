// https://leetcode.com/problems/container-with-most-water/submissions/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let greatestArea = 0
    let barIndex = 0
    let secondIndex = 1
    for (barHeight of height) {
        for (secondHeight of height.slice(secondIndex)){
            let currentArea
           secondHeight >= barHeight ? currentArea = barHeight * (secondIndex-barIndex) : currentArea = secondHeight * (secondIndex-barIndex)
            if (currentArea > greatestArea){
                greatestArea = currentArea
            }
            secondIndex++
        }
        secondIndex = 0
        barIndex++
    }
    return greatestArea
};