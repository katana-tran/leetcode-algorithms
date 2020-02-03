// https://leetcode.com/problems/find-mode-in-binary-search-tree/submissions/
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
var findMode = function(root) {
    let treeHash = {}
    let modeNumber = new Set()
    let modeCount = 0
    let treeStack = [root]
    while(treeStack.length > 0){
       let currentNode = treeStack.pop()
       if (currentNode && treeHash[currentNode.val]){
           treeHash[currentNode.val] +=1
       } else if (currentNode) {
           treeHash[currentNode.val] = 1
       }
        if (currentNode && currentNode.left) { treeStack.push(currentNode.left) }
        if (currentNode && currentNode.right) { treeStack.push(currentNode.right) }
    }
    for (count of Object.keys(treeHash)){
        if (treeHash[count] > modeCount) {
            modeCount = treeHash[count]
            modeNumber.clear()
            modeNumber.add(parseInt(count))
        } 
        if (treeHash[count] == modeCount) {
            modeNumber.add(parseInt(count))
        }
    }
    return Array.from(modeNumber)
};