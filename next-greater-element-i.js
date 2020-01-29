
// https://leetcode.com/problems/next-greater-element-i/submissions/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let outputArray = []
    for(num of nums1) {
        let numFound = false
        for(let numsIndex = 0 ; numsIndex < nums2.length; numsIndex++){  
            if(nums2[numsIndex] == num){
                numFound = true
            } 
            if(nums2[numsIndex] > num && numFound === true){
                outputArray.push(nums2[numsIndex])
                let numFound = false
                break
            }
            if(numsIndex === nums2.length-1){
                outputArray.push(-1)
                let numFound = false
                break
            }
        }
    }
    return outputArray
};