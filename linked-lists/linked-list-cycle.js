/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false;
    }
    let firstPointer = head
    let secondPointer = head.next 
    while (firstPointer != secondPointer){
        if(secondPointer == null || secondPointer.next == null){
            return false
        }
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next.next
    }
    return true
};