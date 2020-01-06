/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // https://leetcode.com/problems/remove-element/
 
var removeElement = function(nums, val) {
    for(num in nums){
        while (nums[num] === val){
            nums.splice(num,1)
        } 
    }
};