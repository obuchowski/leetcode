/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    if (root === null) {
        return 100000
    }

    Number.POSITIVE_INFINITY

    const fromLeft = minDiffInBST(root.left)
    const fromRight = minDiffInBST(root.right)

    let right = 100000,
        left = 100000

    if (root.right) {
        let node = root.right
        while(node.left) {
            node = node.left
        }
        right = node.val - root.val
    }

    if (root.left) {
        let node = root.left
        while(node.right) {
            node = node.right
        }
        left = root.val - node.val
    }

    return Math.min(fromLeft, fromRight, right, left)
};