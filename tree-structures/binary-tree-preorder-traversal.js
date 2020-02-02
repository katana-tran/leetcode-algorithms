//  https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/
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
var preorderTraversal = function(root) {
    let outputArray = []
    let treeStack = [root]
// If root solution is not there then don't do
    if(!root) {return []}
    while (treeStack.length !== 0){
        let currentNode = treeStack.pop()
        outputArray.push(currentNode.val)
        if (currentNode.right !== null) { treeStack.push(currentNode.right) }
        if (currentNode.left !== null) { treeStack.push(currentNode.left) }
    }
    return outputArray
};