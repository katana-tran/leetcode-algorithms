/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //https://leetcode.com/problems/add-two-numbers/
 
var addTwoNumbers = function(l1, l2) {
    let nextNode1 = l1
    let nextNode2 = l2
    let l3
    let head
    let remainder = 0 
    
    while(nextNode1 !== null || nextNode2 !== null){
        let num1 = 0
        let num2 = 0
        if (nextNode1 !== null){
            num1 = nextNode1.val
            nextNode1 = nextNode1.next  
        } 
        
        if (nextNode2 !== null){
            num2 = nextNode2.val
            nextNode2 = nextNode2.next
        }
            
        
        let numberSum = num1 + num2 + remainder
        let representedNumber = numberSum >= 10? numberSum % 10 : numberSum
        remainder = (numberSum - representedNumber) === 10? 1 : 0
        
        if (head === undefined) {
            l3 = new ListNode(representedNumber)
            head = l3
        } else {
            l3.next = new ListNode(representedNumber)
            l3 = l3.next
        }
        
        // if (changingList2.next !== null) {
        //     changingList2.val = representedNumber
        //     changingList2 = changingList2.next
        // } else {  
        //     let newNode = new ListNode(representedNumber)
        //     changingList2.next = newNode
        //     console.log(changingList2.val)
        //     changingList2 = changingList2.next
        // }
        
    }
    if (remainder !== 0){
        l3.next = new ListNode(remainder)
    } 
    return head
}