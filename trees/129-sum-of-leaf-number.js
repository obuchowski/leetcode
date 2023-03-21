// TOPIC: DFS

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
 * @return {number}
 */
var sumNumbers = function(root, val = 0) {
    if (null === root) {
        return 0
    }

    const sum = val * 10 + root.val
    if (null === root.left && null === root.right) {
        return sum
    }

    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum)
}

console.log(sumNumbers(new TreeNode(1, new TreeNode(0),new TreeNode(0))))