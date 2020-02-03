// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let outputArray = []
    let treeStack = []
    let currentNode = root
    if (!root) { return [] }
    while(treeStack) {
        if(currentNode && (currentNode.left == null || currentNode.visited == true)){
            outputArray.push(currentNode.val)
            if(currentNode.right) { currentNode = currentNode.right }
            else { currentNode = treeStack.pop() }
            continue
        } 
        if(currentNode && currentNode.left){
            currentNode.visited = true
            treeStack.push(currentNode)
            currentNode = currentNode.left
        }
        if(currentNode == undefined){
            break
        }
    }
    return outputArray
    
}