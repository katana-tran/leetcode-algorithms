/**
 https://leetcode.com/problems/insert-into-a-binary-search-tree/submissions/

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
var insertIntoBST = function(root, val) {
    let insertNew = new TreeNode(val)
    let treeStack = [root]
    while (treeStack.length > 0) {
        let currentNode = treeStack.pop()
        if (currentNode.val < val) {
            if ( currentNode.right ) { treeStack.push(currentNode.right) } 
            else { currentNode.right = insertNew }
        } 
        if (currentNode.val > val) {
            if ( currentNode.left ) { treeStack.push(currentNode.left) } 
            else { currentNode.left = insertNew }
        } 
    }
    return root
};