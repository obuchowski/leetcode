/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        if (node === null) {
            for (const element of queue) {
                if (element !== null) {
                    return false
                }
            }
        } else {
            queue.push(node.left)
            queue.push(node.right)
        }
    }

    return true
}

console.log(isCompleteTree(TreeNode(5)))