/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //https://leetcode.com/problems/linked-list-cycle-ii/
 
var detectCycle = function(head) {
    if(head === null || head.next === null){
        return null
    }
    let firstPointer = head
    let secondPointer = head.next
    while(firstPointer !== secondPointer){
        if(secondPointer === null || secondPointer.next === null){
            return null
        }
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next.next
    }
    //There is a loop so now we find where it starts!
    //The firstPointer and Secondpointer are at the same point, lets make then take 1 step each time until they reach the same point again => this gives us all the nodes within the loop.
    // We will then restart the head going 1 step at a time which will check for the first node that is in the set, if in the set means the start of the loop.
    let nodesInCycle = new Set()
    firstPointer = firstPointer.next 
    nodesInCycle.add(firstPointer)
    while(firstPointer !== secondPointer){
        nodesInCycle.add(firstPointer)
        firstPointer = firstPointer.next
    }
    console.log(nodesInCycle)
    let newPointer = head
    while(nodesInCycle.has(newPointer) !== true){
        newPointer = newPointer.next
    }
    return newPointer
};