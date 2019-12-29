/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  let myHash = {}
  for(i=0; i<nums.length; i++){
    difference_in_nums = target - nums[i]
    if (myHash[nums[i]] != null){
      return [myHash[nums[i]],i]
    } else {
      myHash[difference_in_nums] = i //{7: 0}
    }
  }
  return myHash
};
