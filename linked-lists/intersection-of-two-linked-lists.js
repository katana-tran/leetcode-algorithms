/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 // https://leetcode.com/problems/intersection-of-two-linked-lists/
 
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null){
        return null
    }
    let newSet = new Set()
    let first = headA
    while(first !== null){
        newSet.add(first)
        first = first.next
    }
    let second = headB
    while(second !== null && !newSet.has(second)){
        second = second.next
    }
    return second
};