/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)

}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) {
        return null
    }

    const root = postorder.pop(),
        i = inorder.indexOf(root)
    return new TreeNode(
        root,
        buildTree(inorder.slice(0, i), postorder.slice(0, i)),
        buildTree(inorder.slice(i + 1), postorder.slice(i))
    )
}

console.log((buildTree([9,3,15,20,7], [9,15,7,20,3])))