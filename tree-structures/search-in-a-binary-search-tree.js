//https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let treeStack = [root]
    while(treeStack.length > 0 ){
        let currentNode = treeStack.pop()
        if (currentNode && currentNode.val == val) { return currentNode }
        if (currentNode && currentNode.val > val) { treeStack.push(currentNode.left) } 
        if (currentNode && currentNode.val < val) { treeStack.push(currentNode.right) }
    }
    return null
};